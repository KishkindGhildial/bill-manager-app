# Car Wash Bills Manager

A sample bill management dashboard built using React & Redux (Scroll further below for more detials...)

## Features


### Level 1

- The dashboard has Add, Edit, Delete functionality

- The Bills are listed on Monthly basis

- Time-series graphs represent each month's expenditure visually in real time

- All components are created, desinged manually from scratch

- The entries can be filtered by category

- When handling data, for ease of demo purposes the year has been locked to '2020', with choice to perform all above operations across the months & dates

### Bills for the month of January
<img width="1440" alt="Screenshot 2022-06-06 at 4 09 05 PM" src="https://user-images.githubusercontent.com/73109553/172147108-f6596658-2bdf-43b0-996f-4e1487d8b2c2.png">

### Bills for the month of February
<img width="1440" alt="Screenshot 2022-06-06 at 4 09 28 PM" src="https://user-images.githubusercontent.com/73109553/172147379-f945e6d9-96d9-4f65-8a11-30166c314caf.png">

### Bills for the Food & Dining Category
<img width="1440" alt="Screenshot 2022-06-06 at 4 09 45 PM" src="https://user-images.githubusercontent.com/73109553/172147519-b17679c2-283f-4b22-b9ff-d14b95d19a74.png">

### Add Bill Form
<img width="1440" alt="Screenshot 2022-06-06 at 4 10 35 PM" src="https://user-images.githubusercontent.com/73109553/172147630-f811abf0-a7b6-4848-a2ed-21e337fe3884.png">

### Edit Bill Form
<img width="1440" alt="Screenshot 2022-06-06 at 4 24 59 PM" src="https://user-images.githubusercontent.com/73109553/172147871-9ab22fba-918f-4e19-aef0-b3d05265c9f9.png">

### Real Time "time-series chart" of the monthly billing cycle
<img width="1440" alt="Screenshot 2022-06-06 at 4 12 23 PM" src="https://user-images.githubusercontent.com/73109553/172147961-977114a5-50d1-4f98-906e-4d693f7924a6.png">



### Level 2

- Dashboard has a find the "minimum number of bills that should be paid" feature

- When toggled, it higlights the minimum number of bills that should be paid such that their total value does not exceed the monthly budget value while meeting the condition that no more bills can be added from the remaining bills.

- This feature renders in real time as well

### The minimum number of bills that should be paid for the given budget
<img width="1440" alt="Screenshot 2022-06-06 at 4 12 56 PM" src="https://user-images.githubusercontent.com/73109553/172148359-293d0922-2dea-469f-957d-83ff34e99c66.png">



## Technical Specifications

- Built over CRA
- Built using React Hooks
- Redux based on session data
- Redux Persist
- Chart.js

## Setup Instructions

- After cloning / downloading
- `npm install`
- `npm start`
