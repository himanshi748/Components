Functional Component : A functional component is just a plain javascript function that accepts props as an argument and return React element.
                       There is no render method used in Functional Component.
                       React life cycle methods cannot used in F C.
Syntax :              
         const car=()=>{
         	return <h2>Hi, I am also a Car!</h2>
         }

Class Component : A class component requires you to extend from react component and create a render function which returns a React element.
                  It must have the render() method returning JSX (which is syntatically similar to HTML).
                  React life cycle methods can be used inside class component.
Synatx :
         class Car extends React.Component {
         	render(){
         		return <h2>Hi, I am also a Car!</h2>
           
            }
         }