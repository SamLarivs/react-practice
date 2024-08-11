import List from './List.jsx'

function App() {
  const fruits = [
    {id: 1, name: "Alex", calories: 6000}, 
    {id: 2, name: "orange", calories: 45}, 
    {id: 3,name: "apple", calories: 95}, 
    {id: 4, name: "banana", calories: 109}, 
    {id: 5, name: "coconut", calories: 159}];

    const vegetables = [
      {id: 6, name: "potato", calories: 6000}, 
      {id: 7, name: "celery", calories: 45}, 
      {id: 8,name: "carrots", calories: 95}, 
      {id: 9, name: "corn", calories: 109}, 
      {id: 10, name: "broccoli", calories: 159}];
  
  
  
  return(
    <>
    {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
    {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}
    </>
);
}

export default App