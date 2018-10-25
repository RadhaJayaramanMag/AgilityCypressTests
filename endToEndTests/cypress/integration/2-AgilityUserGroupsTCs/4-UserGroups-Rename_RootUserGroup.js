const loginUtils = require('../../utils/loginUtils');
const changeDropdownUtils = require('../../utils/changeDropdownUtils');
const configOptionsUtils = require('../../utils/configOptionsUtils');

describe('Rename User Groups', function () {
   const submitBtn = '#ws-dialog-submit';
   const cancelBtn = '#ws-dialog-cancel';
   const UnitTrust = '#ug_2-39304'; 
    it('TC24-Click on Rename User group to display Rename user group pop-up window', function () {
		// 2 fields Old name, New name and 2 buttons Ok, Cancel.
        const renameUser ='Rename User Group...';

        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');

        // Open 'Rename Root User Group...'
        cy.get(UnitTrust).click();
        cy.wait(1000);
        configOptionsUtils.selectToolMenuItem(renameUser);
        
        cy.get("#rename-user-group-dialog-content").should('contain','Old Name:');
        cy.get("#rename-user-group-dialog-content").should('contain','New Name:');
        cy.get(submitBtn).should('be.disabled');
        cy.get(cancelBtn).should('be.visible');
      
        loginUtils.logoutFromAMI();
        cy.wait(100);
    });
   it('TC25: Enter Newname field data(same as Oldname filed data) to display disabled Ok button. ',function(){
        const renameUser ='Rename User Group...';
        const rename = 'UnitTrust';

        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');

        // Open 'Rename Root User Group...'
        cy.get(UnitTrust).click();
        cy.wait(1000);
        configOptionsUtils.selectToolMenuItem(renameUser);

         cy.get("#rug-name").clear().type(rename);
         cy.get(submitBtn).should('be.disabled');
         loginUtils.logoutFromAMI();
    cy.wait(100);
   });
   it('TC26-Enter Newname field data(not same as Oldname filed data) to display enabled Ok button.',function(){
        const renameUser ='Rename User Group...';
        const rename1 = 'UnitTrustGroup';

        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');

       // Open 'Rename Root User Group...'
       cy.get(UnitTrust).click();
       cy.wait(1000);
       configOptionsUtils.selectToolMenuItem(renameUser);
       cy.get("#rug-name").clear().type(rename1);
       cy.get(submitBtn).should('be.visible');  

        loginUtils.logoutFromAMI();
        cy.wait(100);
 });
  it('TC27-Enter Newname field data and click on Cancel button for not to rename the User group.',function(){
      const renameUser ='Rename User Group...';
      const rename1 = 'UnitTrustGroup';

    loginUtils.loginToAMI('cypress1');

    changeDropdownUtils.changeWorkspace('Configuration Options');

    // Open the UserGroups definition tool.
    configOptionsUtils.selectTool('User Groups');

    // Open 'Rename Root User Group...'
    cy.get(UnitTrust).click();
    cy.wait(1000);
    configOptionsUtils.selectToolMenuItem(renameUser);
    cy.get("#rug-name").clear().type(rename1);
    cy.get(cancelBtn).click();
    
    loginUtils.logoutFromAMI();
    cy.wait(100);
  });
   it('TC28-Enter Newname field data and clcik on Ok button to rename the User group.',function(){
    const renameUser ='Rename User Group...';
    const rename1 = 'UnitTrustGroup';

    loginUtils.loginToAMI('cypress1');

    changeDropdownUtils.changeWorkspace('Configuration Options');

    // Open the UserGroups definition tool.
    configOptionsUtils.selectTool('User Groups');

    // Open 'Rename Root User Group...'
    cy.get(UnitTrust).click();
    cy.wait(1000);
    configOptionsUtils.selectToolMenuItem(renameUser);
    cy.get("#rug-name").clear().type(rename1);
    cy.get(submitBtn).click();

    loginUtils.logoutFromAMI();
  });
});