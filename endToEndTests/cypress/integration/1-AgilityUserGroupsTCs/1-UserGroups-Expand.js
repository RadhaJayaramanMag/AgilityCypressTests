const loginUtils = require('../../utils/loginUtils');
const changeDropdownUtils = require('../../utils/changeDropdownUtils');
const configOptionsUtils = require('../../utils/configOptionsUtils');

 describe('Testing the UserGroups Tool', function() {
    const cancelBtn = '#ug-gadget-cancel-btn';
    const okBtn = '#ug-gadget-ok-btn'; 
    const tsCheckbox = '#ug-cb-28194';
    const cypressAdmin = '#ug_2-39025'; 
    it('TC1-Expand a User Group Gadget to display all the items', function() {  
      
    loginUtils.loginToAMI('cypress1');

    changeDropdownUtils.changeWorkspace('Configuration Options');

    configOptionsUtils.selectTool('User Groups');
  
    cy.get('#ug_2-3').should('contain','Admin Group');
    cy.get('#ug-list-pane').should('contain','Sort by:');
    cy.get(okBtn).should('be.disabled');
    cy.get(cancelBtn).should('be.disabled');
    
 loginUtils.logoutFromAMI(); 
 cy.wait(200);
});
 it('TC2-Select the User group to display the checked check-boxes in the top and their counts will display be at the bottom',function(){

    loginUtils.loginToAMI('cypress1');
    
    changeDropdownUtils.changeWorkspace('Configuration Options');

    configOptionsUtils.selectTool('User Groups');
    
     cy.get(cypressAdmin).click();
     cy.wait(2000);
     cy.get('#ug-user-list > h2').should(($h2) => {
       expect($h2).to.have.length(2)
       expect($h2.eq(0)).to.contain('Group Members:')
       expect($h2.eq(1)).to.contain('Available Users:')
       expect(true).to.be.true;
   });  
    loginUtils.logoutFromAMI(); 
    cy.wait(200);
});
 it('TC3-Under any User group check the check-box to enable the Apply and Cancel buttons',function(){
      loginUtils.loginToAMI('cypress1'); 

      changeDropdownUtils.changeWorkspace('Configuration Options');

      configOptionsUtils.selectTool('User Groups');

      cy.get(cypressAdmin).click();
      cy.wait(1000);
      cy.get(tsCheckbox).check();
      cy.get(okBtn).should('be.visible');
      cy.get(cancelBtn).should('be.visible');

      loginUtils.logoutFromAMI();
      cy.wait(100);
}); 
    it('TC4-Under any User group check the check-box and click on Cancel button',function(){
        
        loginUtils.loginToAMI('cypress1');

        changeDropdownUtils.changeWorkspace('Configuration Options');

        configOptionsUtils.selectTool('User Groups');
        cy.get(cypressAdmin).click();
      cy.wait(1000);
      cy.get(tsCheckbox).check(); 
      cy.wait(500);
       cy.get(cancelBtn).click();
      
       loginUtils.logoutFromAMI();
       cy.wait(100);
    });
    it('TC5-Under any User group check the check-box and click on Apply button',function(){
        
        loginUtils.loginToAMI('cypress1');
    
        changeDropdownUtils.changeWorkspace('Configuration Options');
    
        configOptionsUtils.selectTool('User Groups');
        cy.get(cypressAdmin).click();
        cy.wait(1000);
       cy.get(tsCheckbox).check(); 
       cy.get(okBtn).click();
     
       loginUtils.logoutFromAMI();
       cy.wait(100);
    });
    
  it('Under any User group uncheck the check-box and click on Apply button',function(){
    loginUtils.loginToAMI('cypress1');

    changeDropdownUtils.changeWorkspace('Configuration Options');
  
    configOptionsUtils.selectTool('User Groups');
    cy.get(cypressAdmin).click();
    cy.wait(1000);
    cy.get('input[type="checkbox"]').uncheck(['28194']); 
    cy.get(okBtn).click();
  
    loginUtils.logoutFromAMI();
  cy.wait(100);
  });
    it('TC6-Click on User group gadget to display the Sort-by drop-down items to be sorted',function() {
      loginUtils.loginToAMI('cypress1');
    
      changeDropdownUtils.changeWorkspace('Configuration Options');
    
      configOptionsUtils.selectTool('User Groups');
    
      cy.get('#ug-user-sort').should('contain','Login Name')
       .should('contain','User Name');
    
      loginUtils.logoutFromAMI({force: true});
    });
    it('TC7-Under any User group gadget, select the User name using drop-down to diplay the respective users',function() {
      loginUtils.loginToAMI('cypress1');
      
      changeDropdownUtils.changeWorkspace('Configuration Options');
    
      configOptionsUtils.selectTool('User Groups');
    
      cy.get(cypressAdmin).click();
      cy.wait(1000);
      cy.get('#ug-user-sort').select('userName');
        
     loginUtils.logoutFromAMI({force: true});
    });
});   