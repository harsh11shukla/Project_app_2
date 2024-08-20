
  const arr = [1,2,2,3,4,4,4,5,5,5,5,5,1,1,2,4,6,5,6,7,8,6,4,2];

function find_Unique_And_Count_duplicate(arr) {
    const counts = {};
  
    
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      counts[item] = (counts[item] || 0) + 1;
    }
  
    
    const uniqueValues = [];
    for (const key in counts) {
      if (counts[key] === 1) {
        uniqueValues.push(Number(key)); 
      }
    }
  
    return { uniqueValues, counts };
  }
  

  
  const result = find_Unique_And_Count_duplicate(arr);
  console.log("Unique Values:", result.uniqueValues);  
  console.log("Counts:", result.counts);               
  