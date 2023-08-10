let store = new Store()
let productInStore = store.findAll()

function showAll() {
    let str = ''
    for (let i = 0; i < productInStore.length; i++) {
        str += `
            <tr>
                <td>${productInStore[i].id}</td>
                <td>${productInStore[i].name}</td>
                <td>${productInStore[i].quantity}</td>
                <td>${productInStore[i].price}</td>
                <td><button onclick="showFormEdit(${i})" style="color: deeppink">Edit</button></td>
                <td><button onclick="remove(${i})" style="color: deeppink">Remove</button></td>
            </tr>
            `
    }
    document.getElementById('products').innerHTML = str;
}

showAll()

function showFormAdd() {
    document.getElementById('form-add').innerHTML = `
    <center>
        <h1 style="color: deeppink">Add</h1>
        <table border="0.5" style="border: 2px solid; color: deeppink">
            <tr>
                <td>ID:</td>
                <td><input type="number" id="id1" style="color: deeppink"></td>
            </tr>
            <tr>
                <td>Name:</td>
                <td><input type="text" id="name1" style="color: deeppink"></td>
            </tr>
            <tr>
                <td>Quantity:</td>
                <td><input type="number" id="quantity1" style="color: deeppink"></td>
            </tr>
            <tr>
                <td>Price:</td>
                <td><input type="number" id="price1" style="color: deeppink"></td>
            </tr>
            <tr>
                <td colspan="2"><button onclick="add()" style="color: deeppink">Add</button></td>
            </tr>
        </table>
    </center>
    `
}

function add() {
    let id = document.getElementById('id1').value;
    let name = document.getElementById('name1').value;
    let quantity = document.getElementById('quantity1').value;
    let price = document.getElementById('price1').value;
    let newProduct = new Product(id, name, quantity, price);
    store.add(newProduct)
    showAll();
    document.getElementById('form-add').innerHTML = ''
}

function remove(index) {
    let isConfirm = confirm('Bạn có muốn xóa không ?')
    if (isConfirm) {
        store.remove(index)
        showAll();
    }
}

function showFormEdit(index) {
    document.getElementById('form-add').innerHTML = `
    <center>
        <h1 style="color: deeppink">Edit</h1>
        <table border="0.5" style="border: 2px solid; color: deeppink">
            <tr>
                <td>ID:</td>
                <td><input type="number" value="${productInStore[index].id}" id="id2" style="color: deeppink"></td>
            </tr>
            <tr>
                <td>Name:</td>
                <td><input type="text" value="${productInStore[index].name}" id="name2" style="color: deeppink"></td>
            </tr>
            <tr>
                <td>Quantity:</td>
                <td><input type="number" value="${productInStore[index].quantity}" id="quantity2" style="color: deeppink"></td>
            </tr>
            <tr>
                <td>Price:</td>
                <td><input type="number" value="${productInStore[index].price}" id="price2" style="color: deeppink"></td>
            </tr>
            <tr>
                <td colspan="2"><button onclick="edit(${index})" style="color: deeppink">Save</button></td>
            </tr>
        </table>
    </center>
    `
}

function edit(index) {
    let id = +document.getElementById('id2').value;
    let name = document.getElementById('name2').value;
    let quantity = +document.getElementById('quantity2').value;
    let price = +document.getElementById('price2').value;
    let editProduct = new Product(id, name, quantity, price);
    productInStore[index].id = id;
    productInStore[index].name = name;
    productInStore[index].quantity = quantity;
    productInStore[index].price = price;
    showAll()
    document.getElementById('form-add').innerHTML = ''
}