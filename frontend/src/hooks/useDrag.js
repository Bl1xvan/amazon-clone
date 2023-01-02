import { useEffect, useRef } from "react";
export default function useDrag(id) {
    const isClicked = useRef(false);
    const startX = useRef(0)
    const x = useRef(0)
  
    useEffect(() => {

      const container = document.getElementById(id);

      const target = container.firstElementChild
  
      const onMouseDown = (e) => {
        isClicked.current = true;
        startX.current = e.offsetX - target.offsetLeft
        container.style.cursor = "grabbing"
      }
  
      const onMouseUp = () => {
        isClicked.current = false;
        container.style.cursor = "grab";
      }
  
      const onMouseMove = (e) => {
        if (!isClicked.current) return;
        e.preventDefault();
        x.current = e.offsetX
        target.style.left = `${x.current - startX.current}px` 
        checkBoundary() 

      }

      const checkBoundary = () => {
        let outer = container.getBoundingClientRect()
        let inner = target.getBoundingClientRect()

        if(parseInt(target.style.left) > 0){
          target.style.left = "0px"
        }
        
        if(inner.right < outer.right){
          target.style.left = `-${inner.width - outer.width}px`
        }


      }

      checkBoundary()

  
      container.addEventListener('pointerdown', onMouseDown);
      window.addEventListener('pointerup', onMouseUp);
      container.addEventListener('pointermove', onMouseMove)
      
      const cleanup = () => {
        container.removeEventListener('pointerdown', onMouseDown)
        container.removeEventListener('pointermove', onMouseMove)
      }

      return cleanup
 
    }, [id])
};
