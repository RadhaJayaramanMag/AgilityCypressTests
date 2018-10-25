const loginUtils = require('../../utils/loginUtils');
const changeDropdownUtils = require('../../utils/changeDropdownUtils');
const configOptionsUtils = require('../../utils/configOptionsUtils');

describe('Delete User Groups', function () {
    const submitBtn = '#ws-dialog-submit';
    const cancelBtn = '#ws-dialog-cancel';
    const UnitTrust = '#ug_2-39304';
    it('TC21-Click on Delete User group to display Delete User group pop-up window with Ok and Cancel buttons', function () {
        const deleteUser = 'Delete User Group';

        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');

        // Open 'Delete Root User Group...'
        cy.get(UnitTrust).click();
        cy.wait(1000);
        configOptionsUtils.selectToolMenuItem(deleteUser);
        cy.get(submitBtn).should('contain','OK');
        cy.get(cancelBtn).should('contain','Cancel');
      
        loginUtils.logoutFromAMI();
        cy.wait(100);
 });

    it('TC22-In Delete User group pop-up window,click on Cancel button not to delete the selected User group', function () {
        const deleteUser = 'Delete User Group';

        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');

        // Open 'Delete Root User Group...'
        cy.get(UnitTrust).click();
        cy.wait(1000);
        configOptionsUtils.selectToolMenuItem(deleteUser);
       
        cy.get(cancelBtn).click();
      
        loginUtils.logoutFromAMI();
        cy.wait(100);
 });
    it('TC23-In Delete User group pop-up window,click on Ok button to delete the selected User group', function () {
        const deleteUser = 'Delete User Group';

        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');

        // Open 'Delete Root User Group...'
        cy.get(UnitTrust).click();
        cy.wait(1000);
        configOptionsUtils.selectToolMenuItem(deleteUser);
       
        cy.get(submitBtn).click();
      
        loginUtils.logoutFromAMI();
    });
});