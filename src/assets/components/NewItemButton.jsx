import Swal from "sweetalert2"

const NewItemButton = () => {
    const newItemModal = async () => {
        const {value} = await Swal.fire({
          title: "New Item information",
          html: `
            <input 
              class="swal2-input" 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Name"
            />
            <input 
              class="swal2-input" 
              type="number" 
              id="quantity" 
              name="quantity" 
              placeholder="Quantity"
            />
            <input 
              class="swal2-input" 
              type="text" 
              id="unit" 
              name="unit" 
              placeholder="unit"
            />
          `,
          confirmButtonText: "Add Item",
          showCancelButton: true,
          cancelButtonText: 'Dismiss',
          focusConfirm: false,
          preConfirm: () => {
            const name = Swal.getPopup().querySelector("#name").value;
            const quantity = Swal.getPopup().querySelector("#quantity").value;
            const unit = Swal.getPopup().querySelector("#unit").value;
            if(!name || !quantity || !unit){
              Swal.showValidationMessage("Please enter full information.");
            }
            return {name, quantity, unit};
          }
        })
        console.log(value);
    }
  return (
    <button 
        type="button" 
        class="btn btn-outline-primary"
        onClick={newItemModal}>
        <i class="bi bi-plus-circle"></i>
    </button>
  )
}

export default NewItemButton