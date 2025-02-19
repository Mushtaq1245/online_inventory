const inventory = {
    item1: { name: "Laptop", price: 5, stock: 5, category:"Electronics"},
    item2: { name: "Papers", price: 10, stock: 10, category: "Books" },
    item3: { name: "Shoes", price: 30, stock: 5, category: "Clothing" },
    item4: { name: "tea", price: 5, stock: 10, category: "Grosery" },
    item5: { name: "Mobile", price: 300, stock: 10, category: "Electronics" },
    item6: { name: "Tableat", price: 350, stock: 16, category: "Electronics" },
    item7: { name: "Note Book", price: 10, stock: 10, category: "Books" },
    item8: { name: "Mango", price: 300, stock: 10, category: "Fruits" },
    item9: { name: "T-Shirts", price: 25, stock: 20, category: "Clothing" }
};
//-=========----------------------------Prepare inventory-------------------------------------> 
// show inventory function
function show_inventory() {
    // Clear Inventory
    document.getElementById('click_electronic').innerHTML = "";

    let all_inventory = "";
    for (let [key, item] of Object.entries(inventory)) {
        all_inventory += `Name: ${item.name}, Price: ${item.price}, Stock: ${item.stock}, Category: ${item.category} <br><br>`;
    }
    document.getElementById('inventory').innerHTML = all_inventory;
}

//==================================Show Inventory by category=========================================
//==========================Electronics==========================
function handleDropdownChange(category) {
    // clear inventory  
    document.getElementById('inventory').innerHTML = "";

    let different_inventory = "";
    for (let [key, item] of Object.entries(inventory)) {
        if (item.category === category) {
            different_inventory += "Name: " + item.name + ", " + "Price  :" + item.price + ", " + "Stock: " + item.stock + ", " + "Category: " + item.category + "<br>" + "<br>";;
        }

    }
    document.getElementById('click_electronic').innerHTML = different_inventory;
}

//=========================================================>
    
function restock(category) {
    // Clear Inventory...
    document.getElementById('click_electronic').innerHTML = "";

    let restock_inventory = "";
    for (let [key, item] of Object.entries(inventory)) {
        if (item.category === category) {
            item.stock = item.stock + 5;
            item.price = item.price * 5;
            restock_inventory += "Name: " + item.name + ", " + "Price  :" 
            + item.price + ", " + "Stock: " + item.stock + ", " + "Category: " + 
            item.category + "<br>" + "<br>";
        }
    }
    document.getElementById('sum_inventory').innerHTML = restock_inventory;
}








// //Turnery Operator

// // Condition ? true : False


// var current_age = prompt("Enter your Age ");
// var nadra_age = 18;

// var a = (current_age >= nadra_age) ? "Your are elligible for CNIC"
//     : "Your are Not elligible for CNIC"

// document.write(a); 