## I. DATA STRUCTURES

*(Arrays should also be included; however, because array is too familiar, it is skipped from the list)*

- [Lists](data%20structures/lists/README.md)
- [Stacks](data%20structures/stacks/README.md)
- [Queues](data%20structures/queues/README.md)
- [Linked List](data%20structures/linked-list/README.md)  
- [Dictionaries](data%20structures/dictionaries/README.md)
- [Hashing](data%20structures/hasing/README.md)
- [Sets](data%20structures/sets/README.md)
- [Binary Trees](data%20structures/binary-trees/README.md)
- [Graphs](data%20structures/graphs/README.md)

## II. ALGORITHMS
### [A. Sorting Algorithms](algorithms/sorting-algorithms/index.js)
#### Basic sorting algorithms
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Definition</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Bubble sort</td>
            <td>
                When data are sorted using the algorithm, values float like a bubble from one end of the array to the other, larger values float to the right of the array and lower values float to the left. This behavior is the result of the algorithm moving through the array many times, comparing adjacent values, and swapping them if the value to the left is greater than the value to the right.
            </td>
        </tr>
        <tr>
            <td>Selection sort</td>
            <td>
                This sort works by starting at the beginning of the array and comparing the first element with the remaining elements. After examining all the elements, the smallest element is placed in the first position of the array, and the algorithm moves to the second position. This process continues until the algorithm arrives at the next to last position in the array, at which point all the data is sorted.
            </td>
        </tr>
        <tr>
            <td>Insertion sort</td>
            <td>
                The insertion sort is analogous to the way humans sort data numerically or alphabetically.
            </td>
        </tr>
    </tbody>
</table>

#### Advanced sorting algorithms
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Definition</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Shell sort</td>
            <td>
                <p>This algorithm is based on the insertion sort but is a big improvement over that basic sorting algorithm. Shellsort’s key concept is that it compares distant elements first, rather than adjacent elements, as is done in the insertion sort. Elements that are far out of place can be put into place more efficiently using this scheme than by simply comparing neighboring elements. As the algorithm loops through the data set, the distance between each element decreases until, when at the end of the data set, the algorithm is comparing elements that are adjacent.</p>
                <p>In short, Shellsort works by defining a gap sequence that indicates how far apart compared elements are when starting the sorting process.</p>
            </td>
        </tr>
        <tr>
            <td>Merge sort</td>
            <td>
                It works by merging sorted sublists together to form a larger, completely sorted list.
                <ul>
                    <li>
                        <strong>Bottom-up Merge sort: </strong>The nonrecursive, or iterative, version of Mergesort is referred to as a bottom-up process. The algorithm begins by breaking down the data set being sorted into a set of one-element arrays. Then these arrays are slowly merged by creating a set of left and right subarrays, each holding the partially sorted data until all that is left is one array with the data perfectly sorted.
                    </li>
                    <li>
                        <strong>Top-down Merge sort: </strong>It is customary to implement Mergesort as a recursive algorithm. The basic idea is that the array is split into two pieces, left and right. Each piece is then recursively split into its own left and right pieces, until the base case is reached, which is an array with a single element. Then the left and right pieces are merged into sorted order, on back up through the recursive calls until the outermost left and right partitions are merged, leaving the list in sorted order.
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Quick sort</td>
            <td>
                <p>Quicksort is a divide-and-conquer algorithm that recursively breaks a list of data into successively smaller sublists consisting of the smaller elements and the larger elements. The algorithm continues this process until all the data in the list is sorted.</p> 
                <p>The algorithm divides the list into sublists by selecting one element of the list as a <strong>pivot</strong>. Data is sorted around the pivot by moving elements less than the pivot to the bottom of the list and elements that are greater than the pivot to the top of the list.</p>
            </td>
        </tr>
    </tbody>
</table>

### [B. Searching algorithms](algorithms/searching-algorithms/index.js)
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Definition</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Sequential search</td>
            <td>
                <ul>
                    <li>
                        Sequential search is used when the items in a list are in random order;
                    </li>
                    <li>
                        Sometimes also called a <strong>linear</strong> search. It is an example of a <strong>brute-force</strong> search technique, where potentially every element in the data structure is visited on the way to a solution.
                    </li>
                    <li>
                        Sequential search is implemented by simply starting a loop at the beginning of the list and compare each element to the data you are searching for. If a match is found, the search is over. If getting to the end of the list without generating a match, then the data searched for is not in the list.
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Binary search</td>
            <td>Binary search is used when the items in a list are in sorted order.</td>
        </tr>
    </tbody>
</table>