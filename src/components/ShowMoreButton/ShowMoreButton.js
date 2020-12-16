import "./ShowMoreButton.css";

const ShowMoreButton = ({ onShowMore, isDisabled }) => (
  <button onClick={onShowMore} disabled={isDisabled}>
    Show me two more
  </button>
);

export default ShowMoreButton;
