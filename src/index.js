class App extends React.Component {
    constructor (){
        super();
        this.state = {
            products :[],
            item:''
        }
        this.changeInputVal = (e) =>{
            this.setState ({
                item: e.target.value
            })
        }
        this.submitForm = (e)=>{
            e.preventDefault();
            let products =[...this.state.products, {
                id : Math.random(),
                name : this.state.item
            }]
            this.setState({
                products,
                item:''
            })
        }
        this.deleteItem = (id) =>{
            let products =[...this.state.products]
            let newproducts = products.filter(product => product.id != id)
            this.setState({
                products : newproducts
            })
        }
    }

    render() {
        return (
             <div className ='app'>
                <Header />
                <ListItems products={this.state.products} removeItem={this.deleteItem}/>
                <AddItem changeInpt={this.changeInputVal} saveData={this.submitForm} item={this.state.item}/>
             </div>
        );
    }
}
class Header extends React.Component {
    render(){
        return <header>Header</header>
    }
}
class Item extends React.Component {
    render(){
      
    }
}
class ListItems extends React.Component {
    render(){
        return (
            <div>
                {this.props.products.length == 0 && <div>There are no items</div>}
            {
                this.props.products.map(product => <Iteem id={product.id} item={product.name} removeItem={this.props.removeItem}/>)
            }
            </div>
        )
    }
}
class Iteem extends React.Component {
    render(){
        return  <div>{this.props.item} <button onClick={() => this.props.removeItem(this.props.id)}>Delete</button></div>
    }
}

class AddItem extends React.Component {
    render (){
        return (
            <form onSubmit={this.props.saveData}>
                <input type='text' onChange={this.props.changeInpt} value={this.props.item}/>
                <input type='submit'/>
            </form>
        )
    }
}
ReactDOM.render(<App />,document.getElementById('he'))