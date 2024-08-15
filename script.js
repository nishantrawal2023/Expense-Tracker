let expenseForm = document.getElementById('expenseForm')

        let expenseList = document.getElementById('expenseList')

        expenseForm.addEventListener('submit' , function(e){
            e.preventDefault();

            const description = document.getElementById('description').value
            const category = document.getElementById('category').value
            const amount = document.getElementById('amount').value

            if(description && category && !isNaN(amount)){
                let newRow = document.createElement('tr')

                newRow.innerHTML = `<td> ${description} </td> 
                <td> ${category} </td>
                <td> ${amount} </td>`

                expenseList.appendChild(newRow)

                document.getElementById('description').value = ""
                document.getElementById('category').value = "Select Category"
                document.getElementById('amount').value = ""
            }else{
                alert('Please fill out all fields with valid Data')
            }
        })