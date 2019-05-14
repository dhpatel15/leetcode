var numIslands = function(grid) {
  if(grid === null || grid.length === 0){
    return 0;
  }
  
  let counter = 0;
  
  for(let i =0; i < grid.length; i++){
    for( let j =0; j < grid[i].length; j++){
      counter += dfs(grid, i, j)
    }
  }
  
  return counter
};

var dfs = function(grid, i, j) {
  if(i < 0 || i >= grid.length || j >= grid[i].length || j < 0 || grid[i][j] === "0"){
    return 0;
  }
  
  grid[i][j] = "0"
  
  dfs(grid, i-1, j)
  dfs(grid, i+1, j)
  dfs(grid, i , j-1)
  dfs(grid, i , j+1)
  return 1
};