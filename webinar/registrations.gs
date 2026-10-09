/**
 * Webinar registrations → Google Sheet.
 *
 * The website's #/webinar form POSTs (form-encoded) to this script's web-app
 * URL; each registration is appended as a row on the "Registrations" tab.
 *
 * Setup (once):
 *   1. Create a Google Sheet, then Extensions → Apps Script.
 *   2. Replace the editor contents with this file and Save.
 *   3. Deploy → New deployment → type "Web app":
 *        Execute as:      Me
 *        Who has access:  Anyone
 *      Authorize when prompted, then copy the web-app URL (ends in /exec).
 *   4. Paste that URL into COPY.webinar.endpoint in copy.jsx.
 *
 * After editing this script, Deploy → Manage deployments → Edit → Version:
 * "New version" — that keeps the same /exec URL (a *new deployment* would not).
 */

const SHEET_NAME = 'Registrations';
const HEADERS = ['Registered at', 'Name', 'Email', 'Company', 'Job title', 'Phone'];
const FIELDS = ['name', 'email', 'company', 'title', 'phone'];
const MAX_LEN = 200;
// Optional: an address to email on each new registration ('' to disable).
const NOTIFY_EMAIL = '';

function doPost(e) {
  const p = (e && e.parameter) || {};

  // Honeypot: a hidden field only bots fill in. Pretend success, store nothing.
  if (p.website) return json({ ok: true });

  const v = {};
  for (const f of FIELDS) v[f] = String(p[f] || '').trim().slice(0, MAX_LEN);
  v.email = v.email.toLowerCase();

  if (FIELDS.some((f) => !v[f])) return json({ ok: false, error: 'Please fill in every field.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) {
    return json({ ok: false, error: 'That email address looks off — double-check it.' });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getSheet();
    // One row per email: a repeat submit is treated as already registered.
    const last = sheet.getLastRow();
    if (last > 1) {
      const emails = sheet.getRange(2, 3, last - 1, 1).getValues().flat()
        .map((x) => String(x).replace(/^'/, '').toLowerCase());
      if (emails.includes(v.email)) return json({ ok: true, duplicate: true });
    }
    // Phone is always stored as text so a leading 0 or + survives.
    sheet.appendRow([new Date(), ...FIELDS.map((f) => (f === 'phone' ? "'" + v[f] : safe(v[f])))]);
  } finally {
    lock.releaseLock();
  }

  if (NOTIFY_EMAIL) {
    MailApp.sendEmail(NOTIFY_EMAIL, 'Webinar registration: ' + v.name + ' (' + v.company + ')',
      FIELDS.map((f) => f + ': ' + v[f]).join('\n'));
  }
  return json({ ok: true });
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }
  return sheet;
}

// Keep submitted text from being evaluated as a formula (=, +, -, @).
function safe(s) {
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
