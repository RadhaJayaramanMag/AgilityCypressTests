const loginUtils = require('../../utils/loginUtils');
const changeDropdownUtils = require('../../utils/changeDropdownUtils');
const configOptionsUtils = require('../../utils/configOptionsUtils');

describe('Copy and Paste User Groups', function () {
    const pasteUser = 'Paste Users';
    const cancelBtn = '#ug-gadget-cancel-btn';
    const okBtn = '#ug-gadget-ok-btn';
    const cypressAdmin = '#ug_2-39025';
    const tester = '#ug_2-39193';
//     it('TC37-Without selecting any User group, click on Action menu the Copy Users menu item is disabled', function() {
//         // const copyUser = 'Copy Users';

//         loginUtils.loginToAMI('cypress1');

//         changeDropdownUtils.changeWorkspace('Configuration Options');

//         // Open the UserGroups definition tool.
//         configOptionsUtils.selectTool('User Groups');

//         // Open 'Copy User Group...'
//         // configOptionsUtils.selectToolMenuItem();
//         configOptionsUtils.selectToolMenuItem('Copy Users').closest('li').should('have.class', 'ui-state-disabled').click({force: true});
//         cy.get('#ws-dialog-container_confirm-dialog').should('not.be.visible');
//     //    cy.get('#conf-atr-def-title').find("span").should('contain','Copy Users').should('be.disabled');
  
//         loginUtils.logoutFromAMI();
//    });
   it('TC36-Select any User group, click on Action menu to click on Copy Users to copy the User group', function() {
            const copyUser = 'Copy Users';
    
            loginUtils.loginToAMI('cypress1');
    
            changeDropdownUtils.changeWorkspace('Configuration Options');
    
            // Open the UserGroups definition tool.
            configOptionsUtils.selectTool('User Groups');
    
           // Open 'Copy User Group...'
            cy.get(cypressAdmin).click();
            cy.wait(1000);
           configOptionsUtils.selectToolMenuItem(copyUser);
         
         loginUtils.logoutFromAMI();
    });
//   it('TC38: Without copying any User group click on Action menu and verify the Paste Users menu item is disabled', function () {

//         loginUtils.loginToAMI('cypress1');

//         changeDropdownUtils.changeWorkspace('Configuration Options');

//         // Open the UserGroups definition tool.
//         configOptionsUtils.selectTool('User Groups');

//         // Open 'Paste User Group...'
//         configOptionsUtils.selectToolMenuItem(pasteUser);
//         cy.wait(1000);
//         cy.get("#conf-atr-def-title-menuPasteUsers").should('be.disabled');
        
//       loginUtils.logoutFromAMI();
//     });
    it('TC39: Select any User group click on Copy Users and select some other User group and click on Paste Users and verify.', function () {
    
        const copyUser = 'Copy Users';
        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');

        // Open 'Paste User Group...'
        cy.get(cypressAdmin).click();
        cy.wait(1000);
        cy.get('#ug-cb-11156').check();
        configOptionsUtils.selectToolMenuItem(copyUser);
        cy.get(tester).click();
        configOptionsUtils.selectToolMenuItem(pasteUser);
  
        loginUtils.logoutFromAMI();
 });
    it('TC40: After Paste Users click on Cancel button for not to copy any changes',function(){

        const copyUser = 'Copy Users';
        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');
        // Open 'Paste User Group...'
        cy.get(cypressAdmin).click();
        cy.wait(1000);
        cy.get('#ug-cb-11156').check();
        configOptionsUtils.selectToolMenuItem(copyUser);
        cy.get(tester).click();
        configOptionsUtils.selectToolMenuItem(pasteUser);
        
        cy.get(cancelBtn).click();
  
        loginUtils.logoutFromAMI();
    });

    it('TC41:After Paste Users click on Ok button to copy all the Users',function(){
            
        const copyUser = 'Copy Users';
        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');
        // Open 'Paste User Group...'
        cy.get(cypressAdmin).click();
        cy.wait(1000);
        cy.get('#ug-cb-11156').check();
        configOptionsUtils.selectToolMenuItem(copyUser);
        cy.get(tester).click();
        configOptionsUtils.selectToolMenuItem(pasteUser);
        cy.get(okBtn).click();
  
        loginUtils.logoutFromAMI();
    });

   
});