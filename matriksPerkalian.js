
A = [
        [3, 4],
        [1, 2]
]
B = [
        [7, 5],
        [6, 4]
] ;

function avam(A,B){

var result = new Array(A.length);

for(var i = 0; i < result.length; i++){
    result[i] =new Array( B[i].length);

    for(var j = 0; j < A.length; j++){
        result[i][j] = 0;

        for(var k = 0; k < B.length; k++){
            result[i][j] += A[i][k] * B[k][j];
        }
    }
}
return result;
};
console.log(avam(A,B))
