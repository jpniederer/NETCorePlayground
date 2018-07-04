export default ChatRoom = ({name, peopleInside, selected}) => (
  <div className='{selected ? {} : {}'>
    <h3>{this.props.name}</h3>
    <p>{this.props.peopleInside}</p>
  </div>
)