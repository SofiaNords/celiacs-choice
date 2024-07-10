import { useEffect, useRef, useState } from 'react';

function useClickOutsideToggle() {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null);

    // Add an event listener to handle clicks outside the specified element
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)){
                setExpanded(false);
            }
        };

        document.addEventListener('mouseup', handleClickOutside);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
        };
    }, [ref]);
  return { expanded, setExpanded, ref };
}

export default useClickOutsideToggle;
