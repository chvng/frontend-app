import React, { useState, useEffect } from 'react';

function SubscribableService() {
//     const [subscribableGroup, setSubscribableGroup] = useState({results: []});
//     const [subscribableService, setSubscribableService] = useState({results: []});

//     useEffect(() => {
//         const getSubscribableGroupList = () => {
//             const getSubscribableGroup = group;
//             setSubscribableGroup(getSubscribableGroup);
//         }
//         getSubscribableGroupList();

//         const getSubscribableServiceList = () => {
//             const getSubscribableService = service;
//             setSubscribableService(getSubscribableService); 
//         }
//         getSubscribableServiceList();
//     }, [])

//     console.log(subscribableService);

//     return (
//         <Grid className="systems__container">
//             <GridRow>
//                 <GridCol style={{ paddingBottom: '0.3em' }} lg="2">
//                     <div className="systems__header">
//                         <h4 className="ffe-h4">Systemer</h4>
//                     </div>
//                 </GridCol>
//                 <GridCol className="systems__menu" lg="12">
//                     <div className="systems__underline"></div>
//                 </GridCol>
//             </GridRow>
//             <GridRow>
//                 <GridCol className="systems__picker" lg="6">
//                     <div className="systems__description">
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//                     </div>
//                     <div className="systems__dropdown">
//                     <Dropdown 
//                     className="subscription__dropdown-box"
//                     defaultValue="placeholder"
//                 >
//                     <option 
//                         value="placeholder"
//                         disabled
//                     >
//                             Velg systemer
//                     </option>
//                     <optgroup label="Grupperte systemer">
//                         {subscribableGroup.results.map((sub, index) => (
//                             <option 
//                                 value={sub.name} 
//                                 key={index}
//                             >
//                                     {sub.name}
//                             </option>
//                         ))}
//                     </optgroup>
//                     <optgroup label="Systemer">
//                         {subscribableService.results.map((sub, index) => (
//                             <option
//                                 value={sub.name}
//                                 key={index}
//                             >
//                                 {sub.name}
//                             </option>
//                         ))}
//                     </optgroup>
//                 </Dropdown>
//                     </div>
//                 </GridCol>
//                 <GridCol className="systems__selected-system" lg="6">
//                     <div className="systems__description">
//                         <p>Mine abonnerte systemer</p>
//                     </div>
//                 </GridCol>
//             </GridRow>
//         </Grid>
}

export default SubscribableService; 