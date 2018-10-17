const loginUtils = require('../../utils/loginUtils');
const changeDropdownUtils = require('../../utils/changeDropdownUtils');
const anyGadgetUtils = require('../../utils/anyGadgetUtils');
const browserGadgetUtils = require('../../utils/browserGadgetUtils');

describe('Brand Relation Gadgets - Unlink MenuItem',function(){
  const multiInstance = '#check-idx_1190';
   it('TC25-Without selecting any vendor object and click on action menu',function(){
    
        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');   
        browserGadgetUtils.setStructureType('!0EggVendorParent');     
        const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
        thisGadget().openGadgetHamburger();
        cy.get("#Vendor-menu").find("li").should('contain','Unlink').should('be.disabled');

    loginUtils.logoutFromAMI();
    cy.wait(100); 
   });
   it('TC26-Select any vendor object and click on action menu',function(){
    
    loginUtils.loginToAMI('cypress1');
    changeDropdownUtils.changeWorkspace('QA Relations With Browse');
    anyGadgetUtils.openGadgetOrGroup('Browse');
    browserGadgetUtils.setStructureType('Brands');
    browserGadgetUtils.setBrowseContext('Cypress', false);
    anyGadgetUtils.openGadgetOrGroup('Brand Relations'); 
    browserGadgetUtils.setStructureType('!0EggVendorParent');
    cy.get(multiInstance).check();    

    const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
    thisGadget().openGadgetHamburger();
    cy.get("#Vendor-menu").find("li").should('contain','Unlink').should('be.visible');


    loginUtils.logoutFromAMI(); 
    cy.wait(100);
  });
  it('TC27-select Unlink menu item to display Unlink-Brand-relation-items pop-up window ',function(){
    
    loginUtils.loginToAMI('cypress1');
    changeDropdownUtils.changeWorkspace('QA Relations With Browse');
    anyGadgetUtils.openGadgetOrGroup('Browse');
    browserGadgetUtils.setStructureType('Brands');
    browserGadgetUtils.setBrowseContext('Cypress', false);
    anyGadgetUtils.openGadgetOrGroup('Brand Relations'); 
    browserGadgetUtils.setStructureType('!0EggVendorParent');
    cy.get(multiInstance).check();    

    const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
        thisGadget().getGadgetHamburgerMenuItem('Unlink').click();

    cy.get('#ws-dialog-content').should('contain','Cancel')
      .should('contain','OK');

    loginUtils.logoutFromAMI(); 
    cy.wait(100);
  });
  it('TC28-Click on Cancel button, then selected object is not unlinked',function(){
    
    loginUtils.loginToAMI('cypress1');
    changeDropdownUtils.changeWorkspace('QA Relations With Browse');
    anyGadgetUtils.openGadgetOrGroup('Browse');
    browserGadgetUtils.setStructureType('Brands');
    browserGadgetUtils.setBrowseContext('Cypress', false);
    browserGadgetUtils.setStructureType('!0EggVendorParent');
    anyGadgetUtils.openGadgetOrGroup('Brand Relations'); 
    cy.get(multiInstance).check();    

    const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
        thisGadget().getGadgetHamburgerMenuItem('Unlink').click();

    cy.get('#ws-dialog-cancel').click();

     loginUtils.logoutFromAMI(); 
     cy.wait(100);
  });
  it('TC29-click on Ok button, then selected object is unlinked',function(){
    
    loginUtils.loginToAMI('cypress1');
    changeDropdownUtils.changeWorkspace('QA Relations With Browse');
    anyGadgetUtils.openGadgetOrGroup('Browse');
    browserGadgetUtils.setStructureType('Brands');
    browserGadgetUtils.setBrowseContext('Cypress', false);
    browserGadgetUtils.setStructureType('!0EggVendorParent');
    anyGadgetUtils.openGadgetOrGroup('Brand Relations'); 
    cy.get(multiInstance).check(); 
    cy.get('#arrow-idx_1190').click();    
    cy.get('#check-8-idx_2735-22066').check();  
    cy.wait(1000);
    const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
        thisGadget().getGadgetHamburgerMenuItem('Unlink').click();

    cy.get('#ws-dialog-submit').click();

     loginUtils.logoutFromAMI(); 
  });

});