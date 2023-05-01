1. It prints out 3. This is the length of list prices which is the value i reaches at the end of the for loop. 
2. It print out 150. This is the discounted price of the last item in the list of prices. This is printed out because the variable discountedPrice is assigned that during the final iteration of the for loop which is iterating through the list of prices. 
3. This also prints out 150. That's because that is the discountedPrice of the last item in the list of prices rounded to the second decimal place. 
4. The function will return an array with each of the original prices discounted by 50% and rounded to the second decimal place. 
5. This gives a reference error because the variable i is only in scope within the for loop. 
6. This also gives a reference error because the variable discountedPrice is also only in scope within the for loop. 
7. It print out 150 for the same reason as in question 4. There are no issues with scope because the variable was declared in the scope of the entire function. 
8. The function will return [50, 100, 150] which are the discounted prices of the original prices array. 
9. This will give a reference error because the variable i is out of scope. It is only in scope within the for loop. 
10. It prints out 3 which is the length of the prices array. 
11. The function returns [50, 100, 150], which are the discounted prices of the original prices array. This works because within the for loop we create a variable discountedPrice (which contains the original price times the discount) and then push this variable into the discounted array which is what is returned at the end of the function. 

12. 
    A. `student.name` <br> 
    B. `student['Grad Year']` <br>
    C. `student.greeting()` <br>
    D. `student['Favorite Teacher'].name` <br>
    E. `student.courseLoad[0]` 

13. 
    A. `'32'`, the number if converted to a string and then concatenated. <br>
    B. `1`, '3' was converted to a string and 2 was subtracted from it. <br>
    C. `3`, null was converted to 0. <br>
    D. `'3null'`, null was converted to a string and then concatenated. <br> 
    E. `4`, true was converted to 1. <br>
    F. `0`, false and null were both converted to 0 and then added. <br>
    G. `'3undefined'`, undefined was converted to a string and concatenated. <br>
    H. `NaN`, there was an error. Undefined couldn't be converted a number. 

14. 
    A. `true`, 2 was converted a string and compared with 1. <br>
    B. `false`, it does string comparison. 2 is greater than 1. <br>
    C. `true`, '2' is converted to a number and compared with 2. <br>
    D. `false`, since they are of different types, it immediately returns false. <br>
    E. `false`, true is converted to 1 which does not equal 2. <br>
    F. `true`, both sides are true since Boolean(2) = true. 

15. If the types being compared are different, the `==` operator converts both of them to a number and does the comparison. However, the `===` operator simply returns false if the types are different. So it doesn't do any type conversion. 

<br>

17. This function returns an array with all the values doubled. This is because in the modifyArray() function, it loops through all the values of array and passes each value into the callback function before pushing in the result of the callback function into a new array. The callback function in this case is doSomething() which doubles the value given to it and returns it. Therefore, while looping through the array all the values are doubled and pushed into newArr. 

<br>

19. `1` <br>
    `4` <br>
    `3` <br>
    `2`   
