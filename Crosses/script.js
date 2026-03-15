document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.block');
  let counter = 1
  function closeAll(){
    blocks.forEach((elem,i) => {
      elem.classList.remove('cross')
      elem.classList.remove('circle')
    })
  }
  blocks.forEach((elem,i) => {
    elem.addEventListener('click', () => {
      if (counter == 1){
        elem.classList.toggle('cross');
               if (blocks[0].classList.contains('cross') && blocks[1].classList.contains('cross') && blocks[2].classList.contains('cross')){
                 alert("Победили крестики!")
                 closeAll()
               }
                if (blocks[3].classList.contains('cross') && blocks[4].classList.contains('cross') && blocks[5].classList.contains('cross')){
                  alert("Победили крестики!")
                  closeAll()
                }
                if (blocks[6].classList.contains('cross') && blocks[7].classList.contains('cross') && blocks[8].classList.contains('cross')){
                  alert("Победили крестики!")
                  closeAll()
                }
                if (blocks[0].classList.contains('cross') && blocks[3].classList.contains('cross') && blocks[6].classList.contains('cross')){
                  alert("Победили крестики!")
                  closeAll()
                }
                if (blocks[1].classList.contains('cross') && blocks[4].classList.contains('cross') && blocks[7].classList.contains('cross')){
                  alert("Победили крестики!")
                  closeAll()
                }
                if (blocks[2].classList.contains('cross') && blocks[5].classList.contains('cross') && blocks[8].classList.contains('cross')){
                  alert("Победили крестики!")
                  closeAll()
                }
                if (blocks[0].classList.contains('cross') && blocks[4].classList.contains('cross') && blocks[8].classList.contains('cross')){
                  alert("Победили крестики!")
                  closeAll()
                }
                if (blocks[2].classList.contains('cross') && blocks[4].classList.contains('cross') && blocks[6].classList.contains('cross')){
                  alert("Победили крестики!")
                  closeAll()
                }
        counter = 0
      }
      else {
        elem.classList.toggle('circle');
        if (blocks[0].classList.contains('circle') && blocks[1].classList.contains('circle') && blocks[2].classList.contains('circle')){
          alert("Победили нолики!")
          closeAll()
        }
         if (blocks[3].classList.contains('circle') && blocks[4].classList.contains('circle') && blocks[5].classList.contains('circle')){
           alert("Победили нолики!")
           closeAll()
         }
         if (blocks[6].classList.contains('circle') && blocks[7].classList.contains('circle') && blocks[8].classList.contains('circle')){
           alert("Победили нолики!")
           closeAll()
         }
         if (blocks[0].classList.contains('circle') && blocks[3].classList.contains('circle') && blocks[6].classList.contains('circle')){
           alert("Победили нолики!")
           closeAll()
         }
         if (blocks[1].classList.contains('circle') && blocks[4].classList.contains('circle') && blocks[7].classList.contains('circle')){
           alert("Победили нолики!")
           closeAll()
         }
         if (blocks[2].classList.contains('circle') && blocks[5].classList.contains('circle') && blocks[8].classList.contains('circle')){
           alert("Победили нолики!")
           closeAll()
         }
         if (blocks[0].classList.contains('circle') && blocks[4].classList.contains('circle') && blocks[8].classList.contains('circle')){
           alert("Победили нолики!")
           closeAll()
         }
         if (blocks[2].classList.contains('circle') && blocks[4].classList.contains('circle') && blocks[6].classList.contains('circle')){
           alert("Победили нолики!")
           closeAll()
         }
        counter = 1
      }
      })
    })

})
