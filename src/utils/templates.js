/**
 * Recommendation Templates - Maps categories to recommended actions
 */

const actionTemplates = {
  "Billing Issue": "Verify customer account details in Stripe/Billing Dashboard, verify double charges or invoice history, and issue a full refund or billing credit if confirmed.",
  "Technical Problem": "Check system status page for outages, review browser console logs/error screenshots from user, and escalate to engineering tier 2 if reproducible.",
  "General Inquiry": "Provide the relevant Knowledge Base article link and offer to walk them through the setup step-by-step if needed.",
  "Feature Request": "Log the request in Product Feedback Tracker, tag the feature category, and inform the user that it has been passed to the product team for evaluation.",
  "Unknown": "Escalate immediately to senior support manager for manual review and direct outreach within 1 hour."
}

/**
 * Get recommended action for a given category
 * 
 * @param {string} category - The message category
 * @param {string} urgency - The urgency level
 * @returns {string} - Recommended next step
 */
export function getRecommendedAction(category, urgency) {
  return actionTemplates[category] || "No recommendation available."
}

/**
 * Get all available categories
 * 
 * @returns {string[]} - List of categories
 */
export function getAvailableCategories() {
  return Object.keys(actionTemplates)
}

/**
 * Determines if message should be escalated
 * 
 * @param {string} category - The message category
 * @param {string} urgency - The urgency level
 * @param {string} message - The original message
 * @returns {boolean} - Whether to escalate
 */
export function shouldEscalate(category, urgency, message) {
  return message.length > 100
}
