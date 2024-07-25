/*import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const Message = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
  };

  return (
    <React.Fragment>
      <a href="#" onClick={toggleParagraph}>Want to buy a new car?</a>
      {showParagraph && <p>Call +11 22 33 44 now!</p>}
    </React.Fragment>
  );
}erHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));

root.render(<Message />);
const rootElement 
export default Message;

document.body.inn= document.getElementById("root");
setTimeout(() => {
  console.log("Before click: " + rootElement.innerHTML);

  document.querySelector("a").click();
  setTimeout(() => {
    console.log("After click: " + rootElement.innerHTML);
  }, 0);
});*/

/*const { kMaxLength } = require("buffer");
const { inherits } = require("util");
import React from 'react';
import { createRoot } from 'react-dom/client';

const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

const TodoList = ({ items, onListClick, onItemClick }) => {
  const handleItemClick = (item, event) => {
    // Write your code here
  };

  return (
    <ul onClick={onListClick}>
      {items.map((item, index) => 
        <TodoItem item={item} key={index} onClick={(event) => handleItemClick(item, event)}/>)}
    </ul>
  );
}

const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

const App = (props) => <TodoList
  items={props.items}
  onListClick={(event) => console.log("List clicked!")}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;
export default App;
document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));

root.render(<App items={items}/>);*/

/*import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <FocusableInput/>
    </div>
  )
}

export default App

const FocusableInput = (props) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.shouldFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [props.shouldFocus]);

  return <input ref={inputRef} />;
};

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<FocusableInput shouldFocus={true} />);
setTimeout(() => console.log(document.getElementById("root").innerHTML), 300);*/

/*const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a number: ', input => {
  const trimmedInput = input.trim();       // Step 1: Trim whitespace
  const number = parseInt(trimmedInput, 10); // Step 2: Parse as integer with base 10

  // Step 3: Output the parsed number
  console.log(`The parsed number is: ${number}`);

  readline.close();
});*/

 // src/App.js
/*import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [mode, setMode] = useState(false);

    const toggleMode = () => {
        setMode(prevMode => !prevMode);
        document.body.className = !mode ? 'Appd' : 'Appw';
    };

    return (
        <div className="container">
            <h1>React Dark Mode App</h1>
            <button onClick={toggleMode}>
                Switch to {mode ? 'Light' : 'Dark'} Mode
            </button>
        </div>
    );
};

export default App;*/

/*import React, { useState } from 'react'
            import './App.css';
           
           const App = () => {
            const[mode,setMode]=useState(false)
            const togmode=()=>{
                setMode(!mode)
            }
            document.body.className=mode?'Appw':'Appd'

             return (
               <div>
                   <button onClick={togmode}>{mode?'dark':'white'}</button>
                 
               </div>
             )
           }
           
           export default App*/
           
/*import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [mode, setMode] = useState(true);

    useEffect(() => {
      document.body.className = mode ?  'Appw':'Appd';

    }, [mode]); // This effect runs every time `mode` changes

    const togmode = () => {
        setMode(prevMode => !prevMode); // Using functional update to ensure correct state update
    };

    return (
        <div>
            <button onClick={togmode}>{mode ? 'dark': 'white'}</button>
        </div>
    );
};

export default App;*/

 /*import React from 'react'
                     
                    const App = () => {
                      const arr=[
                        {
                            "type": "switch",
                            "model": "searchAccount",
                            "value": false,
                            "nameKey": "genSettingLayoutService.Account",
                            "visible": true
                        },
                        {
                            "type": "radio",
                            "model": "searchContact",
                            "value": true,
                            "nameKey": "genSettingLayoutService.Contact",
                            "visible": true
                        },
                        {
                            "type": "text",
                            "model": "searchLead",
                            "value": false,
                            "nameKey": "genSettingLayoutService.Lead",
                            "visible": true

                        }
                    ] 
            
            

                      return (
                        <div>
                           {
                            arr.map((i,j)=><li key={j}>
                              <label>{i.model}
                                <input type='radio' n/>
                              </label>
                            
                            </li>)

                           }
                          
                        </div>
                      )
                    }
                    
                    export default App*/

/*import React from 'react';
const App = () => {
  const arr = [
    {
      type: 'switch',
      model: 'searchAccount',
      value: false,
      nameKey: 'genSettingLayoutService.Account',
      visible: true,
    },
    {
      type: 'radio',
      model: 'searchContact',
      value: true,
      nameKey: 'genSettingLayoutService.Contact',
      visible: true,
    },
    {
      type: 'text',
      model: 'searchLead',
      value: false,
      nameKey: 'genSettingLayoutService.Lead',
      visible: true,
    },
  ];

  return (
    <div>
      {arr.map((item, index) => {
        if (!item.visible) return null;

        let inputElement;
        switch (item.type) {
          case 'switch':
            inputElement = (
              <input
                type="checkbox"
                checked={item.value}
                onChange={() => {}}
              />
            );
            break;
          case 'radio':
            inputElement = (
              <input
                type="radio"
                checked={item.value}
                onChange={() => {}}
              />
            );
            break;
          case 'text':
            inputElement = (
              <input
                type="text"
                value={item.value}
                onChange={() => {}}
              />
            );
            break;
          default:
            inputElement = null;
        }

        return (
          <li key={index}>
            <label>
              {item.model}
              {inputElement}
            </label>
          </li>
        );
      })}
    </div>
  );
};

export default App;*/

/*import React from 'react';

// Custom Components for each type
const Switch = ({ value, onChange }) => (
  <input type="checkbox" checked={value} onChange={onChange} />
);

const Radio = ({ value, onChange }) => (
  <input type="radio" checked={value} onChange={onChange} />
);

const TextInput = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} />
);

const App = () => {
  const arr = [
    {
      type: 'switch',
      model: 'searchAccount',
      value: false,
      nameKey: 'genSettingLayoutService.Account',
      visible: true,
    },
    {
      type: 'radio',
      model: 'searchContact',
      value: true,
      nameKey: 'genSettingLayoutService.Contact',
      visible: true,
    },
    {
      type: 'text',
      model: 'searchLead',
      value: false,
      nameKey: 'genSettingLayoutService.Lead',
      visible: true,
    },
  ];

  return (
    <div>
      {arr.map((item, index) => {
        if (!item.visible) return null;

        let inputElement;
        switch (item.type) {
          case 'switch':
            inputElement = (
              <Switch value={item.value} onChange={() => {}} />
            );
            break;
          case 'radio':
            inputElement = (
              <Radio value={item.value} onChange={() => {}} />
            );
            break;
          case 'text':
            inputElement = (
              <TextInput value={item.value} onChange={() => {}} />
            );
            break;
          default:
            inputElement = null;
        }

        return (
          <li key={index}>
            <label>
              {item.model}
              {inputElement}
            </label>
          </li>
        );
      })}
    </div>
  );
};

export default App;*/

// Container Component
/*import React, { useState, useEffect } from 'react';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then(
      res=>res.json()
    ).then(
    json => setData(json)
  );
  }, []);

  return <PresentationalComponent data={data} />;
};

export default App

// Presentational Component


const PresentationalComponent = ({ data }) => (
  <div>
    {data.map(item => 
      <li key={item.id}>{item.title}</li>
    )}
  </div>
);*/

/*import React, { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]);

  return data;
};

const MyComponent = () => {
  const data = useFetchData('https://fakestoreapi.com/products');

  return (
    <div>
      {data ? data.map(item => <div key={item.id}>{item.title}</div>) : 'Loading...'}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <MyComponent/>
    </div>
  )
}

export default App*/



/*import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div>
        {React.Children.map(children, (child, index) => (
          <button onClick={() => setActiveIndex(index)}>
            {child.props.label}
          </button>
        ))}
      </div>
      <div>{children[activeIndex]}</div>
    </div>
  );
};

const Tab = ({ children }) => <div>{children}</div>;

const App = () => (
  <Tabs>
    <Tab label="madhu">Content of Tab 1</Ta>
    <Tab label="balu">Content of Tab 2</Ta>
    <Ta label="attamma">Content of Tab 3</Ta>
    <Ta label="siddu">Content of Tab 4</Ta>

  </Tabs>
);

export default App;*/

/*import React from 'react';

const App = () => {
  const arr = [
    {
      type: 'checkbox',
      model: 'searchAccount',
      value: false,
      nameKey: 'genSettingLayoutService.Account',
      visible: true,
    },
    {
      type: 'radio',
      model: 'searchContact',
      value: true,
      nameKey: 'genSettingLayoutService.Contact',
      visible: true,
    },
    {
      type: 'text',
      model: 'searchLead',
      value: false,
      nameKey: 'genSettingLayoutService.Lead',
      visible: true,
    },
  ];

  return (
    <div>
      {arr.map((item, index) => {
        if (!item.visible) return null;

        let inputElement;
        switch (item.type) {
          case 'checkbox':
            inputElement = (
              <input
                type="checkbox"
                checked={item.value}
                onChange={() => {}}
              />
            );
            break;
          case 'radio':
            inputElement = (
              <input
                type="radio"
                checked={item.value}
                onChange={() => {}}
              />
            );
            break;
          case 'text':
            inputElement = (
              <input
                type="text"
                value={item.value}
                onChange={() => {}}
              />
            );
            break;
          default:
            inputElement = null;
        }

        return (
          <li key={index}>
            <label>
              {item.model}
              {inputElement}
            </label>
          </li>
        );
      })}
    </div>
  );
};

export default App;*/



/*import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div>
        {React.Children.map(children, (child, index) => (
          <button onClick={() => setActiveIndex(index)}>
            {child.props.label}
          </button>
        ))}
      </div>
      <div>{children[activeIndex]}</div>
    </div>
  );
};

const Tab = ({ children }) => <div>{children}</div>;

const App = () => (
  <Tabs>
    <Tab label=' na pellam'>madhu </Tab>
    <Tab label=' attamma'> laxmi </Tab>

  </Tabs>
);

export default App;*/



   /*import React, { useState } from 'react'
   
   const Tabs = ({children}) => {
    const[activeIndex,setActiveIndex] =useState(0)
     return (
           <div>
            {React.Children.map(children, (child,index) =>(
          <button onClick={()=>setActiveIndex(index)}>
            {child.props.label}
          </button>
          ))}
            <div>{children[activeIndex]}</div>
          </div>
          
       
     )
   }
   
  
   const Tab=({children}) =><div>{children}</div>



   const App = () => {
    return (
      <Tabs>
              <Tab label='Tab1'>Tab1</Tab>
              <Tab label='Tab2'>Tab2</Tab>
              <Tab label='Tab3'>Tab3</Tab>
              <Tab label='Tab4'>Tab4</Tab>
        
      </Tabs>
    )
  }
  
  export default App*/
 // Dropdown.js
/*import React, { useState, createContext, useContext } from 'react';

const DropdownContext = createContext();

const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle }}>
      <div className="dropdown">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

const DropdownToggle = ({ children }) => {
  const { toggle } = useContext(DropdownContext);

  return (
    <button onClick={toggle} className="dropdown-toggle">
      {children}
    </button>
  );
};

const DropdownMenu = ({ children }) => {
  const { isOpen } = useContext(DropdownContext);

  return isOpen ? (
    <div className="dropdown-menu">
      {children}
    </div>
  ) : null;
};

const DropdownItem = ({ children, onClick }) => {
  return (
    <div className="dropdown-item" onClick={onClick}>
      {children}
    </div>
  );
};

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;*/

  // App.js


/*const App = () => {
  return (
    <div className="app">
      <h1>Dropdown Example with Compound Components</h1>
      <Dropdown>
        <Dropdown.Toggle>Click me</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => alert('Option 1')}>Option 1</Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Option 2')}>Option 2</Dropdown.Item>
          <Dropdown.Item onClick={() => alert('Option 3')}>Option 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default App;*/

/*import React, { useRef, useEffect } from 'react';

const App = () => {
  const timerIdRef = useRef();

  useEffect(() => {
    timerIdRef.current = setInterval(() => {
      console.log('Tick');
    }, 1000);

    return () => clearInterval(timerIdRef.current);
  }, []);

  return <div>Timer Component</div>;
};

export default App;*/



/*import React, { useRef, useEffect } from 'react';

const App = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = 'orange';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return <canvas ref={canvasRef} width={400} height={200}></canvas>;
};

export default App;*/

      //render props
/*import React from 'react';

class DataProvider extends React.Component {
  state = { data: null };

  componentDidMount() {
    fetchData().then(data => this.setState({ data }));
  }

  render() {
    return this.props.render(this.state.data);
  }
}

const App = () => (
  <DataProvider render={data => (
    <div>
      {data ? data.map(item => <div key={item.id}>{item.name}</div>) : 'Loading...'}
    </div>
  )} />
);

export default App;*/



/*import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <body style={{  background: theme === 'dark' ? '#333' : '#fff' }}>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle Theme
      </button>
    </body>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemedComponent />
  </ThemeProvider>
);

export default App*/


//solve:
/*input:function findPair([3,5,-1,7,2,4,8],7){
}
Output: [[3,4], [5,2], [-1,8]]*/



/*function findPair(arr, target) {
  let pairs = [];
  let seenNumbers = {};

  for (let i = 0; i < arr.length; i++) {
      let number = arr[i];
      let complement = target - number;

      if (seenNumbers[complement] !== undefined) {
          pairs.push([complement, number]);
      }

      seenNumbers[number] = i;
  }

  return pairs;
}

// Example usage:
console.log(findPair([3, 5, -1, 7, 2, 4, 8], 8)); */ // Output: [[3, 4], [5, 2], [-1, 8]]




/*function findPair(arr, target) {
  arr.sort((a, b) => a - b);  // Sort the array
  let pairs = [];
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum === target) {
          pairs.push([arr[left], arr[right]]);
          left++;
          right--;
      } else if (sum < target) {
          left++;
      } else {
          right--;
      }
  }

  return pairs;
}*/

// Example usage:
//console.log(findPair([3, 5, -1, 7, 2, 4, 8], 7));  // Output: [[-1, 8], [3, 4], [5, 2]]

// [3, 5, -1, 7, 2, 4, 8], 7

/*function A(arr,target){
        let arr1=[]
        for(let i=0; i<arr.length; i++){
         for(let j=i+1; j<arr.length; j++){
           if(arr[i]+arr[j]===target){
              arr1.push([arr[i],arr[j]])
           }
        }       

      }
          return arr1

      }

      console.log(A([3, 5, -1, 7, 2, 4, 8], 7))*/

/*import React from 'react'
      function B(arr) {
        let uniqueItems = {};
        let result = [];
        for (let item of arr) {
            if (!uniqueItems[item]){
                uniqueItems[item] = true;
                result.push(item);
            }
        }
        return result;
    }
    B([1,20,4,4,40,40,2,3,40,4,50,50,8,8,8])

    
    const App = () => {
      return (
        <div>
          <A/>

        </div>
      )
    }
    
    export default App
  const A = ({result}) => {
      const p=result
      return (
        <div>
          {p}
        </div>
      )
    }*/
/*import React from 'react';

      // Define function B
      function B(arr) {
        let uniqueItems = {};
        let result = [];
        for (let item of arr) {
          if (!uniqueItems[item]) {
            uniqueItems[item] = true;
            result.push(item);
          }
        }
        return result;
      }
      
      // Define component A before using it in App
      const A = ({ result }) => {
        return (
          <div>
            {JSON.stringify(result)}
          </div>
        );
      };
      
      // Main App component
      const App = () => {
        // Call function B and pass its result to component A
        const result = B([1, 20, 4, 4, 40, 40, 2, 3, 40, 4, 50, 50, 8, 8, 8]);
      
        return (
          <div>
            <A result={result} />
          </div>
        );
      };
      
      export default App;*/
      


      /*import React, { useState } from 'react';

      function findPair(arr, target) {
          let pairs = [];
          let seenNumbers = {};
      
          for (let i = 0; i < arr.length; i++) {
              let number = arr[i];
              let complement = target - number;
      
              if (seenNumbers[complement] !== undefined) {
                  pairs.push([complement, number]);
              }
      
              seenNumbers[number] = i;
          }
      
          return pairs;
      }
      
      const App = () => {
          const [array, setArray] = useState([3, 5, -1, 7, 2, 4, 8]);
          const [target, setTarget] = useState(7);
          const [pairs, setPairs] = useState([]);
      
          const handleFindPairs = () => {
              const result = findPair(array, target);
              setPairs(result);
          };
      
          return (
              <div>
                  <h1>Pair Finder</h1>
                  <div>
                      <label>
                          Array:
                          <input 
                              type="text" 
                              value={array} 
                              onChange={(e) => setArray(e.target.value.split(',').map(Number))} 
                          />
                      </label>
                  </div>
                  <div>
                      <label>
                          Target:
                          <input 
                              type="number" 
                              value={target} 
                              onChange={(e) => setTarget(Number(e.target.value))} 
                          />
                      </label>
                  </div>
                  <button onClick={handleFindPairs}>Find Pairs</button>
                  <div>
                      <h2>Pairs that sum up to {target}:</h2>
                      <ul>
                        {pairs.map((pair, index) => (
                              <li key={index}>{`[${pair[0]}, ${pair[1]}]`}</li>
                          ))}
                        {JSON.stringify(pairs,null,2)}
                  
                      </ul>
                  </div>
              </div>
          );
      };
      
      export default App;*/

 /*import React,{useState,useEffect} from 'react'
            const App = () => {
              const[data,setData]=useState([

              {
             id:1,
             name:'siddu',
             parentId:null,
             children:[
               {
                 id:2,
             name:'sujatha',
             parentId:null,
             children:[
               {
                 id:3,
             name:'bhav',
             parentId:null,
             children:[]
               },
               {
                 id:4,
             name:'mithu',
             parentId:null,
             children:[]
               }
             ]
               },
               {
                 id:5,
             name:'tirupathi',
             parentId:null,
             children:[]
               }
             ]
            },
            {
             id:6,
             name:'laxmi',
             parentId:null,
             children:[]
            }

           ])

           useEffect(()=>{
               
              function A(node,parentId){
                node.parentId=parentId
                if(node.children && node.children.length>0){
                  node.children.forEach(child => A(child,node.id))
                     }
                   }
                    
                    const p=[...data]
                   p.forEach(rootNode => A(rootNode,null))
                    setData(p)

                  
               },[data])
                  
                 return (
                  <div>
                     {JSON.stringify(data,null,2)}


                  </div>
                )
              }
              
              export default App*/
      

              /*const privateData = new WeakMap();

              class Person {
                constructor(name, ssn) {
                  this.name = name;
                  privateData.set(this, { ssn: ssn });
                }
              
                getSSN() {
                  return privateData.get(this).ssn;
                }
              
                // other methods can access private data similarly
              }
              
              const person = new Person('Alice', '123-45-6789');
              
              console.log(person.name); // "Alice"
              console.log(person.ssn); // undefined, as ssn is not a direct property
              console.log(person.getSSN()); // "123-45-6789"*/
              
 //private data in weakmap
              /*const PrivateData=new WeakMap();

              class Person{

                 constructor(name,ssn) {
                    this.name = name;
                    PrivateData.set(this,{ssn:ssn});
                   }


                   getSSN(){
  
                     return PrivateData.get(this).ssn

                   }

                   }
                   const person=new Person('madhu',35)

                   console.log(person.name)
                   console.log(person.ssn)
                   console.log(person.getSSN())*/
                   
                  
                  
                 /*function topKFrequent(nums, k) {
                    const map = new Map();
                    nums.forEach(num => map.set(num, (map.get(num) || 0) + 1));
                    return Array.from(map.entries())
                      .sort((a, b) => b[1] - a[1])
                      .slice(0, k)
                      .map(entry => entry[0]);
                  }

                  console.log(topKFrequent([3,3,1,3,4,4,5,4,7,7,7],3))*/
                  
                     /*class Animal {

                    constructor(){
                      console.log('balu loves madhu.');

                    }
                    speak() {
                        console.log('Animal makes a noise.');
                    }

                    reddy(){
                      console.log('balu loves madhu.');

                    }
                }
                
                class Dog extends Animal {
                    speak() {
                        console.log('Dog barks.');
                    }
                }
                
                class Cat extends Animal {
                    speak() {
                        console.log('Cat meows.');
                    }
                }
                
                let animals = [new Animal(), new Dog(), new Cat()];
                animals.forEach(animal => animal.speak());*/
                //animals.reddy();
                

                // Animal makes a noise.
                // Dog barks.
                // Cat meows.




          
import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  const darkMode = () => {
    setIsDarkMode(true);
  };

  const lightMode = () => {
    setIsDarkMode(false);
  };

  return (
    <div>
      <button onClick={darkMode}>Dark Mode</button>
      <button onClick={lightMode}>Light Mode</button>
    </div>
  );
};

export default App;

