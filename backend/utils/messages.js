const messages = require('../lang/en/en.json');

/**
 * Get a message by key path
 * @param {string} key - Dot notation path (e.g., 'errors.validation_failed')
 * @param {object} replacements - Optional object with placeholder replacements
 * @returns {string} The message string
 */
function getMessage(key, replacements = {}) {
    const keys = key.split('.');
    let message = messages;

    for (const k of keys) {
        message = message[k];
        if (message === undefined) {
            console.warn(`Message key not found: ${key}`);
            return key;
        }
    }

    // Replace placeholders like {variable}
    if (typeof message === 'string' && Object.keys(replacements).length > 0) {
        return message.replace(/\{(\w+)\}/g, (match, placeholder) => {
            return replacements[placeholder] || match;
        });
    }

    return message;
}

module.exports = { getMessage };
