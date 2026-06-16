export function calculateUrgency(message) {
  let urgencyScore = 50
  const lowerMessage = message.toLowerCase()

  const criticalWords = [
    'down', 'outage', 'urgent', 'critical', 'emergency',
    'immediately', 'production', 'losing', 'lost', 'broken',
    'not working', 'cant access', "can't access", 'blocked',
    'charged twice', 'double charged', 'refund', 'unauthorized',
    'breach', 'hacked', 'security', 'data loss'
  ]

  const lowUrgencyWords = [
    'thank you', 'thanks', 'happy', 'love', 'great',
    'wonderful', 'excellent', 'appreciate', 'feedback',
    'suggestion', 'feature request', 'dark mode', 'would love'
  ]

  const mediumUrgencyWords = [
    'issue', 'problem', 'error', 'bug', 'slow',
    'question', 'help', 'support', 'billing', 'upgrade'
  ]

  criticalWords.forEach(word => {
    if (lowerMessage.includes(word)) urgencyScore += 25
  })

  lowUrgencyWords.forEach(word => {
    if (lowerMessage.includes(word)) urgencyScore -= 20
  })

  mediumUrgencyWords.forEach(word => {
    if (lowerMessage.includes(word)) urgencyScore += 10
  })

  if (message === message.toUpperCase() && message.length > 10) {
    urgencyScore += 20
  }

  const exclamationCount = (message.match(/!/g) || []).length
  urgencyScore += exclamationCount * 10

  const angryWords = ['unacceptable', 'ridiculous', 'furious', 'angry', 'frustrated', 'worst']
  angryWords.forEach(word => {
    if (lowerMessage.includes(word)) urgencyScore += 20
  })

  urgencyScore = Math.max(0, Math.min(100, urgencyScore))

  if (urgencyScore >= 70) return "High"
  if (urgencyScore <= 35) return "Low"
  return "Medium"
}