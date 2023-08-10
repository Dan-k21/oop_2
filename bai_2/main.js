let store = new Store()

function showAll() {
    let productInStore = store.findAll()
    let str = ''
    for (let i = 0; i < productInStore.length; i++) {
        str += `
            <tr>
                <td>${productInStore[i].id}</td>
                <td>${productInStore[i].name}</td>
                <td>${productInStore[i].quantity}</td>
                <td>${productInStore[i].price}</td>
                <td><button onclick="showFormEdit(${i})">Edit</button></td>
                <td><button onclick="remove(${i})">Remove</button></td>
            </tr>
            `
    }
    document.getElementById('products').innerHTML = str;
}

showAll()

function showFormAdd() {
    document.getElementById('form-add').innerHTML = `
    <center>
        <h1>Add</h1>
        <table>
            <tr>
                <td>ID:</td>
                <td><input type="number" id="id"></td>
            </tr>
            <tr>
                <td>Name:</td>
                <td><input type="text" id="name"></td>
            </tr>
            <tr>
                <td>Quantity:</td>
                <td><input type="number" id="quantity"></td>
            </tr>
            <tr>
                <td>Price:</td>
                <td><input type="number" id="price"></td>
            </tr>
            <tr>
                <td colspan="2"><button onclick="add()">Add</button></td>
            </tr>
        </table>
    </center>
    `
}

function add() {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let quantity = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;
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
    let newProduct = store[index];
    document.getElementById('form-add').innerHTML = `
    <center>
        <h1>Edit</h1>
        <table>
            <tr>
                <td>ID:</td>
                <td><input type="number" value="${newProduct.id}" id="id"></td>
            </tr>
            <tr>
                <td>Name:</td>
                <td><input type="text" value="${newProduct.name}" id="name"></td>
            </tr>
            <tr>
                <td>Quantity:</td>
                <td><input type="number" value="${newProduct.quantity}" id="quantity"></td>
            </tr>
            <tr>
                <td>Price:</td>
                <td><input type="number" value="${newProduct.price}" id="price"></td>
            </tr>
            <tr>
                <td colspan="2"><button onclick="add()">Save</button></td>
            </tr>
        </table>
    </center>
    `
}