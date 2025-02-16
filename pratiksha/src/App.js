import { useState } from 'react'

import FeedbackStats from './components/FeedbackStats'
import FeedBackList from './components/FeedBackList'
import Header from './components/Header'
import FeedbackData from './Data/FeedbackData.js'
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if (window.confirm('are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}
export default App
