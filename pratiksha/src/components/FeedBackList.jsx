import FeedBackitem from './components/FeedBackitem'

function FeedBackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedBackitem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  )
}

export default FeedBackList
