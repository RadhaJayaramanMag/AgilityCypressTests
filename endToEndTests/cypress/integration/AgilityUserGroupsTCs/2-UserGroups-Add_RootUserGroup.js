const loginUtils = require('../../utils/loginUtils');
const changeDropdownUtils = require('../../utils/changeDropdownUtils');
const configOptionsUtils = require('../../utils/configOptionsUtils');

describe('Adding Root User Groups', function () {
            const submitBtn = '#ws-dialog-submit';
            const cancelBtn = '#ws-dialog-cancel';
            const addBtn = '#ws-dialog-add';

    it('TC16-Click on Add Root User group to display all the items', function () {
      const addRootUser = 'Add Root User Group...';

        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');

        // Open 'Add Root User Group...' window.
        configOptionsUtils.selectToolMenuItem(addRootUser);
    
        cy.get("#add-user-group-dialog-content").should('contain', 'Group Name:');
        cy.get(submitBtn).should('be.disabled');
        cy.get(addBtn).should('be.disabled');
        cy.get(cancelBtn).should('be.visible');
        cy.get(cancelBtn).click();
  
        loginUtils.logoutFromAMI();
        cy.wait(200);
    });
    it('TC17-Enter GroupName to enable the Ok and Add buttons', function () {
        const addRootUser = 'Add Root User Group...';
        const createGroupName = 'UnitTrustGroup';

        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');

        // Open 'Add Root User Group...'
        configOptionsUtils.selectToolMenuItem(addRootUser);
        cy.get('input[name="groupName"]').type(createGroupName);
        cy.get(submitBtn).should('be.visible');
        cy.get(addBtn).should('be.visible');
      
        loginUtils.logoutFromAMI();
        cy.wait(200);
  });
    it('TC18-Enter GroupName and click on Cancel button not to create a new RootUserGroup', function () {
        const addRootUser = 'Add Root User Group...';
        const createGroupName = 'UnitTrustGroup';
        
        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');

        // Open 'Add Root User Group...'
        configOptionsUtils.selectToolMenuItem(addRootUser);
        cy.get('input[name="groupName"]').type(createGroupName);
        cy.get(cancelBtn).click();
        cy.wait(2000);
        loginUtils.logoutFromAMI();
        cy.wait(200);
    });
    it('TC19: Enter GroupName and click on Add button to create a new RootUserGroup with the Window remains open', function () {
        const addRootUser = 'Add Root User Group...';
        const createGroupName = 'UnitTrustGroup';

        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');

        // Open 'Add Root User Group...'
        configOptionsUtils.selectToolMenuItem(addRootUser);
        cy.get('input[name="groupName"]').type(createGroupName);
        cy.get(addBtn).click();
        cy.get("#ws-dialog-container_ug-add-user-group").should('have.class','ws-dialog-container_ug-add-user-group ws-dialog ui-widget-content ui-widget ui-draggable');
        cy.get(cancelBtn).click();
        
        loginUtils.logoutFromAMI();
        
    });
    it('TC20: Enter GroupName and click on Ok button to create the new RootUserGroup', function () {
        const addRootUser = 'Add Root User Group...';
        const createGroupName1 = 'UnitTrust1';

        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');

        // Open 'Add Root User Group...'
        configOptionsUtils.selectToolMenuItem(addRootUser);
        cy.get('input[name="groupName"]').type(createGroupName1);
        cy.get(submitBtn).click();
        
        loginUtils.logoutFromAMI();
        
    });
});