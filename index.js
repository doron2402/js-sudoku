function is_valid_solution(grid){
   
	//first split to rows
   	var rows = grid.match(/.{1,9}/g),
        matrix = [],
        cols = [],
        valid = true;
    
    for(var i=0; i<9;i++){
        var row = rows[i].split(""),
            tmpArr = [];
        for(var j=0;j<9;j++){
         tmpArr.push(row[j]);
        }
        matrix[i] = tmpArr;
    }
    
    //Check for 45 in a row
    for (var i=0; i<9;i++){
        var tmpSum = 0;
        for (var j=0; j<9; j++){
            tmpSum += parseInt(matrix[i][j],10);
            i == 0 ? cols[j] = matrix[i][j] : cols[j] +=  ',' + matrix[i][j];
            
        }
         if (tmpSum != 45)
                valid = false;
    }
    
    //Check for 45 in Col
    for (var i=0; i<9; i++){
      var col = cols[i].split(","),
          tmpSum = 0;
      for (var j=0; j<9; j++){
           tmpSum += parseInt(col[j],10);
      }    

      if (tmpSum != 45)
         valid = false;
    }
     
    //Check Value in Box
    valid = checkValueInBox(matrix);
    
    console.log(valid);
    
    //Checking if grid is valid 
    if (valid)
        console.log('Success!');
}


function checkValueInBox(matrix){
   var boxs= [],tmpSum = null, h1=0, h2=0;
   
    for(var i=0; i<matrix.length; i++)
    {
        if (i % 3 == 0 && i>0)
            h1++;
        var tmpBox = []
        for(var j=0; j<matrix[i].length; j++){
            if (j % 3 == 0 && j > 0){
                tmpBox.push(tmpSum);
                
                h2++;
            }
            
            j % 3 == 0 ? tmpSum = parseInt(matrix[i][j],10) :tmpSum += parseInt(matrix[i][j],10);
            
            
            //console.log('h1: ' + h1 + ' h2: ' + h2);
        }
        tmpBox.push(tmpSum);
        boxs.push(tmpBox);
        h2=0;
    }
    
    console.log(boxs)
    for (var i=0; i < boxs.length; i++){
        tmpSum = 0;
        for (var j=0; j < boxs[i].length; j++){
            j==0 ? tmpSum = parseInt(boxs[i][j],10) : tmpSum += parseInt(boxs[i][j],10);
    
                
        }
      
        if (tmpSum != 45)
            return false;
    }
    
    return true;
}

is_valid_solution('751843926893625174642179583425316798176982345938754612364297851289531467517468239');
