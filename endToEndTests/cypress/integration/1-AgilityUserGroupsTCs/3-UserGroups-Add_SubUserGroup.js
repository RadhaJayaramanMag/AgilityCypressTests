const loginUtils = require('../../utils/loginUtils');
const changeDropdownUtils = require('../../utils/changeDropdownUtils');
const configOptionsUtils = require('../../utils/configOptionsUtils');

describe('Adding User Groups', function () {
    const headerLabels = ["Add User Group...","Add Root User Group...","Delete User Group", "Rename User Group...", "-","Assign Workspaces to Group...","-",
    "Copy Users","Paste Users","-","Refresh","-","Help"];
    const submitBtn = '#ws-dialog-submit';
    const cancelBtn = '#ws-dialog-cancel';
    const addBtn = '#ws-dialog-add';
    const UnitTrust = '#ug_2-39304';

    // it('TC10- In User group gadget click on Action menu to display the all MenuItems', function () {
    //      // Menu items: Add user group, Add root user group, Delete user group, Rename user group, Assign workspaces to group, Copy users, Paste users, Refresh and Help.
    //     loginUtils.loginToAMI('cypress1');

    //     changeDropdownUtils.changeWorkspace('Configuration Options');
    //      // Open the UserGroups definition tool.
    //     configOptionsUtils.selectTool('User Groups');
    //      // Open 'Add Root User Group...'
    //     configOptionsUtils.selectToolMenuItem();
        
    //     cy.get("#conf-atr-def-title").find("li").then(function($VisibleText) { 
    //         expect($VisibleText).to.have.lengthOf(14);
    //           $VisibleText.each(function(index, $VisibleText) {
    //           expect($VisibleText).to.have.text(headerLabels[index]);
    //         });
    //       });
    //     loginUtils.logoutFromAMI();
    // });
    it('TC11-click on Add User group to display all the items', function () {
        const addUser = 'Add User Group...';

        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');

        // Open 'Add Root User Group...'
        cy.get(UnitTrust).click();
        cy.wait(1000);
        configOptionsUtils.selectToolMenuItem(addUser);
    
        cy.get("#add-user-group-dialog-content").should('contain', 'Group Name:');
        cy.get(submitBtn).should('be.disabled');
        cy.get(addBtn).should('be.disabled');
        cy.get(cancelBtn).should('be.visible');
        cy.get(cancelBtn).click();
        loginUtils.logoutFromAMI();
        cy.wait(100);
    });
    it('TC12-Enter GroupName to enable the Ok and Add buttons', function () {
        const addUser = 'Add User Group...';
        const createGroupName = 'IBM';

        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');

        // Open 'Add Root User Group...'
        cy.get(UnitTrust).click();
        cy.wait(1000);
        configOptionsUtils.selectToolMenuItem(addUser);
        cy.get('input[name="groupName"]').type(createGroupName);
        cy.get(submitBtn).should('be.visible');
        cy.get(addBtn).should('be.visible');
    
        loginUtils.logoutFromAMI();
        cy.wait(100);
  });
    it('TC13-Enter GroupName and click on Cancel button not to create the new User group', function () {
        const addUser = 'Add User Group...';
        const createGroupName = 'IBM';

        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');
        cy.get(UnitTrust).click();
        cy.wait(1000);
        // Open 'AddUser Group...'
        configOptionsUtils.selectToolMenuItem(addUser);
        cy.get('input[name="groupName"]').type(createGroupName);
        cy.get(cancelBtn).click();

        loginUtils.logoutFromAMI();
        cy.wait(100);
    });
    it('TC14: Enter GroupName and click on Add button to create UserGroup with the Window remain open', function () {
        const addUser = 'Add User Group...';
        const createGroupName = 'IBM';

        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');
        cy.get(UnitTrust).click();
        cy.wait(1000);  
        // Open 'Add User Group...'
        configOptionsUtils.selectToolMenuItem(addUser); 
        cy.get('input[name="groupName"]').type(createGroupName);
        cy.get(addBtn).click();

        cy.get("#ws-dialog-container_ug-add-user-group").should('have.class','ws-dialog-container_ug-add-user-group ws-dialog ui-widget-content ui-widget ui-draggable');
        cy.get(cancelBtn).click
        
        loginUtils.logoutFromAMI();
        cy.wait(100);
        
    });
    it('TC15: Enter GroupName and click on Ok button to create the new User group and the window become closed', function () {
        const addUser = 'Add User Group...';
        const createGroupName1 = 'HP';

        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        // Open the UserGroups definition tool.
        configOptionsUtils.selectTool('User Groups');
        cy.get(UnitTrust).click();
        cy.wait(1000);  
        // Open 'Add User Group...'
        configOptionsUtils.selectToolMenuItem(addUser);
        cy.get('input[name="groupName"]').type(createGroupName1);
        cy.get(submitBtn).click();
        // //check root group created or not
        // cy.get("ug-group-browser").should('contain','HP');
        
        loginUtils.logoutFromAMI();
        
    });

});