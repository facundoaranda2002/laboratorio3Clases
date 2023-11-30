const vec = [3, 2, 6, 8, 9, 4, 5, 6];

/*
let x = vec[0];
let y = vec[1];
let z = vec[2];
let j = vec[3];
*/

//let[x, y, z, j, ...k] = vec; //la k agarra el resto que queda

//console.log(x, y, z, j, k);

for (const i in vec)//for in
{
    console.log(vec[i]);
}

for (const x of vec)//for of
{
    console.log(x);
}
