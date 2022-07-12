let aNumber = 15;

if(aNumber%3==0&&aNumber%5==0)
console.log('FizzBuzz');
else if((aNumber%3==0||aNumber%5==0))
{
if(aNumber%3==0)
console.log('Fizz');
if(aNumber%5==0)
console.log('Buzz');
}
else
console.log(aNumber);
