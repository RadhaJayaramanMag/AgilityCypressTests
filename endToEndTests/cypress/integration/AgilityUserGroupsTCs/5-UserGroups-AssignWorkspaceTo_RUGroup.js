const loginUtils = require('../../utils/loginUtils');
const changeDropdownUtils = require('../../utils/changeDropdownUtils');
const configOptionsUtils = require('../../utils/configOptionsUtils');

describe('Assign WorkSpace To The Group', function() {
  it('TC29-Select User group without any Users,Click on Assign workspaces to group to display the error message', function() {
	// Error message: 'There are no users under the selected group'
    const assignUser = 'Assign Workspaces to Group...';
    
    loginUtils.loginToAMI('cypress1');

    changeDropdownUtils.changeWorkspace('Configuration Options');

    configOptionsUtils.selectTool('User Groups');
    
    cy.get("#ug_2-39304").click();
    cy.wait(2000);
    configOptionsUtils.selectToolMenuItem(assignUser);
    //Click on the Action menu to display 'Assign Workspaces to group'
    cy.get('p').should('contain','There are no users under the selected group.');

   loginUtils.logoutFromAMI();
});
  it('TC30-Select Uer group with some Users,Click on Assign workspaces to group to display the window with 3 columns -',function(){
	  // 3 Columns - Workspace, Current Access and New Access.
      const assignUser = 'Assign Workspaces to Group...';

      loginUtils.loginToAMI('cypress1');
  
      changeDropdownUtils.changeWorkspace('Configuration Options');
  
      configOptionsUtils.selectTool('User Groups');
   
      cy.get("#ug_2-39193").click();
      cy.wait(2000);
      configOptionsUtils.selectToolMenuItem(assignUser);
       cy.get('th').should('contain','Workspace')
               .should('contain','Current Access') 
                 .should('contain','New Access');

       loginUtils.logoutFromAMI();
    }); 
	
	// TC-31, 32  are unable to automate, as the test cases belongs to DB.
  it('TC33-Check the check-box and click on Cancel, Workspace is not available to the Users group',function(){
    const assignUser = 'Assign Workspaces to Group...';

    loginUtils.loginToAMI('cypress1');

    changeDropdownUtils.changeWorkspace('Configuration Options');

    configOptionsUtils.selectTool('User Groups');

    cy.get(cypressAdmin).click();
    configOptionsUtils.selectToolMenuItem(assignUser);

    cy.get('input[name="us-workspace-cb-639"]').check();
    cy.get('tr').eq(1).should('contain', '(8/8 users)');
   
     loginUtils.logoutFromAMI();
 });

  it('TC34-Check the check-box and click on Cancel, Workspace is not available to the Users group',function(){
    const assignUser = 'Assign Workspaces to Group...';

    loginUtils.loginToAMI('cypress1');

    changeDropdownUtils.changeWorkspace('Configuration Options');

    configOptionsUtils.selectTool('User Groups');

    cy.get("#ug_2-39025").click();
    configOptionsUtils.selectToolMenuItem(assignUser);

    cy.get('input[name="us-workspace-cb-652"]').check();
    cy.get("#ws-dialog-cancel").click();
   
     loginUtils.logoutFromAMI();
 });
  it('TC35-Check the check-box and click on OK, Workspace is available to the Users group',function(){
    const assignUser = 'Assign Workspaces to Group...';

    loginUtils.loginToAMI('cypress1');

    changeDropdownUtils.changeWorkspace('Configuration Options');

    configOptionsUtils.selectTool('User Groups');

    cy.get("#ug_2-39025").click();
    configOptionsUtils.selectToolMenuItem(assignUser);

    cy.get('input[name="us-workspace-cb-652"]').check();
    cy.wait(1000);
    cy.get("#ws-dialog-submit").click();
   
    loginUtils.logoutFromAMI();
  });
});
