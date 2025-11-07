/*import Header from"./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";*/
//import Card from "./Card.jsx;"
//import MyFile from "./MyFile.jsx";
//import StyleComponent from"./StyleComponent.jsx";
//import Quiz from"./Quiz.jsx";
//import ChildComponent from "./ChildComponent";
//import UserCard from"./UserCard.jsx";
//import Product from"./Product.jsx";
//import ProductCard from"./ProductCard.jsx";
import TeamMember from"./TeamMember.jsx";

function App() {
 /* const products=[
    {id:1,name:"Laptop",price:"$2000"},
    {id:2,name:"Lappy",price:"$4000"},
   ];*/
   /*const products = [
    { id: 1, name: 'Shoes', price: 59, image: 'Jakes.jpg' },
    { id: 2, name: 'Hat', price: 29, image: 'Jakes.jpg' },
  ];*/
   const products = [
    { id: 1, name: 'Jakes', role: 'Leader', image: 'Picture6.jpg' },
    { id: 2, name: 'Roya', role: 'Assistant', image: 'Picture6.jpg' },
    { id: 1, name: 'David', role: 'Member', image: 'Picture6.jpg' },
    { id: 2, name: 'Daniel', role: 'Member', image: 'Picture6.jpg' },
    { id: 1, name: 'Chidubem', role: 'Member', image: 'Picture6.jpg' },
    { id: 2, name: 'Jordan', role: 'Assistant', image: 'Picture6.jpg' },
    { id: 1, name: 'Chidiebere', role: 'Leader', image: 'Picture6.jpg' },
    { id: 2, name: 'Excel', role: 'Assistant', image: 'Picture6.jpg' },
  ,
  ];
 return (
/*  <Card>
  
  </Card>*/
  <div className="product-list">
      {products.map(product => (
        <TeamMember
       
          name={product.name}
          price={product.role}
          image={product.image}
        />
      ))}
    </div>
    
   /* <div className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>*/
 
  //This is supposed to be in the Div tag
  //this tallies with the first one commented
 /* {products.map(product => (
        <Product key={product.id} name={product.name} price={product.price} />
      ))}*/
  // <UserCard name="Keshi Jakes" email="jakeskeshi100@gmail.com" age="17"/>
  //<ChildComponent name="Keshi Othnel Jakes"/>
 /*<ChildComponent name="Keshi Othnel Jakes" matricnum="24/2323" Dept=" I.T" Group=" A"/>

<ChildComponent name="Keshi Abby" matricnum="24/4000" Dept=" I.T" Group=" A"/>

<ChildComponent name="Olive Keshi" matricnum="24/4001" Dept=" I.T" Group=" A"/>

<ChildComponent name="Keshi David" matricnum="24/4002" Dept=" I.T" Group=" A"/>*/
/*<header>
<h1>My Website</h1>

</header>*/
/*
<>//fragment
<Header/> 
<Footer/>
<Food/>
</>*/
 );
}

export default App;
// recall we can only return one element so we just close them inside a fragment
//inside return
 
    /*<ChildComponent name="Keshi Othnel Jakes" matricnum="24/2323" Dept=" I.T" Group=" A"/>

<ChildComponent name="Roya" matricnum="24/4000" Dept=" I.T" Group=" A"/>

<ChildComponent name="David" matricnum="24/4001" Dept=" I.T" Group=" A"/>

<ChildComponent name="Daniel" matricnum="24/4002" Dept=" I.T" Group=" A"/>
<ChildComponent name="Chidubem" matricnum="24/4002" Dept=" I.T" Group=" A"/>
<ChildComponent name="Jordan" matricnum="24/4002" Dept=" I.T" Group=" A"/>
<ChildComponent name="Chidiebere" matricnum="24/4002" Dept=" I.T" Group=" A"/>
<ChildComponent name="Excel" matricnum="24/4002" Dept=" I.T" Group=" A"/>*/