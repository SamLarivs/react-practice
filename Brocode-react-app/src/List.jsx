import PropTypes from 'prop-types'

function List(props){
    
        //fruits.sort((a, b) => a.name.localeCompare(b.name));
        //fruits.sort((a, b) => a.calories - b.calories);

        //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
        //const highCalFruits = HighCalFruits.filter(fruit => fruit.calories >= 100);
      const category = props.category;
        const itemList = props.items;
      const listItems = itemList.map(item => <li key={item.id}>
                                                {item.name}: &nbsp;
                                                <b>{item.calories}</b></li>)

      
      return(
        <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
      </>);
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                             calories: PropTypes.number})),
}
List.defaultProps = {
    category: "Category",
    items: [],
}
export default List