const loginUtils = require('../../utils/loginUtils');
const changeDropdownUtils = require('../../utils/changeDropdownUtils');
const anyGadgetUtils = require('../../utils/anyGadgetUtils');
const browserGadgetUtils = require('../../utils/browserGadgetUtils');

describe('Brand Relation Gadgets - ', function () {
    const headerLabels = ["Lock to Current Object","-","Copy", "Paste", "Unlink", "Re-order...","-","Options...","-",
                        "Select Suffix Attribute...","Show Suffix Attribute","-","Refresh","-","Help"];
    const cypressRelationBrandNoadd = '#check-idx_1174';
   it('TC1-Expand the Brand relation gadget to display all the attributes',function(){
    
        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');        
       
       loginUtils.logoutFromAMI(); 
       cy.wait(100);
  });
  it('TC2-Click on Action menu to display all menu items',function(){
	// Menu Items - Lock to current object, Options, Select Suffix Attribute, Show Suffix Attribute, Refresh,Help button should be enabled.Copy, Paste, unlink, re-order should be disabled.

    loginUtils.loginToAMI('cypress1');
    changeDropdownUtils.changeWorkspace('QA Relations With Browse');
    anyGadgetUtils.openGadgetOrGroup('Browse');
    browserGadgetUtils.setStructureType('Brands');
    browserGadgetUtils.setBrowseContext('Cypress', false);
    anyGadgetUtils.openGadgetOrGroup('Brand Relations');        
    const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
    thisGadget().openGadgetHamburger();

    cy.get("#Vendor-menu").find("li").then(function($VisibleText) { 
      expect($VisibleText).to.have.lengthOf(15);
        $VisibleText.each(function(index, $VisibleText) {
        expect($VisibleText).to.have.text(headerLabels[index]);
      });
    });
   loginUtils.logoutFromAMI(); 
   cy.wait(100);
});
  
    it('TC3-In Action menu,select Lock to current object menu item to lock the brand relation',function(){ 

        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Events');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        browserGadgetUtils.setStructureType('!!Demo Catalog');
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');

        const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
        thisGadget().getGadgetHamburgerMenuItem('Lock to Current Object').click();

       loginUtils.logoutFromAMI();
       cy.wait(100);
    });
    it('TC4-Select Options menu to display Asset-gadget-options pop-up window',function(){
         
        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Events');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
    
        const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
        thisGadget().getGadgetHamburgerMenuItem('Options...').click();
        cy.get('#ws-dialog-content').should('contain','Only show Paste dialog when auto map fails')
            .should('contain','OK')
            .should('contain','Cancel');
        
            loginUtils.logoutFromAMI();
            cy.wait(100);
    });
   
    it('TC5-Click on Refresh menu item to refresh the page',function(){

        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Events');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');

        const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
        thisGadget().getGadgetHamburgerMenuItem('Refresh').click({force: true});
 
        loginUtils.logoutFromAMI();
        cy.wait(100);
    });
    it('TC6-Click on Help menu item to display the Brand relation gadget Help page',function(){

        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Events');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');

        const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
        thisGadget().getGadgetHamburgerMenuItem('Help').click();
 
        loginUtils.logoutFromAMI();
        cy.wait(100);
    });
    it('TC7-Check the check-box of multi-instance',function(){

        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        browserGadgetUtils.setStructureType('!0EggVendorParent');
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        cy.get(cypressRelationBrandNoadd).check();
        
       const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
       thisGadget().openGadgetHamburger();
       cy.get("#Vendor-menu").find("li").should('contain','Re-order...').should('be.visible');

         loginUtils.logoutFromAMI();
         cy.wait(100);
 });
    it('TC8-Check the check-box of single-instance ',function(){

        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        browserGadgetUtils.setStructureType('!0EggVendorParent');
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        cy.get(cypressRelationBrandNoadd).uncheck();

        const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
        thisGadget().openGadgetHamburger();
        cy.get("#Vendor-menu").find("li").should('contain','Re-order...').should('be.disabled');
 
        loginUtils.logoutFromAMI();
        cy.wait(100);

    });
    it('TC9-Check the check-box of multi-instance child-object ',function(){

        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        browserGadgetUtils.setStructureType('!0EggVendorParent');
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        cy.get(cypressRelationBrandNoadd).check();
        cy.wait(1000);
       const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
       thisGadget().openGadgetHamburger();
       cy.get("#Vendor-menu").find("li").should('contain','Re-order...').should('be.visible');
    
         loginUtils.logoutFromAMI();
         cy.wait(100);
    
      });
  
  it('TC10-Check the check-box of multi-instance to display the error message',function(){
        // Error message: 1077 :The selected relation Contains no objects available for re-ordering' 
        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        browserGadgetUtils.setStructureType('!0EggVendorParent');
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        cy.get(cypressRelationBrandNoadd).check();
        cy.wait(1000);
       const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
       thisGadget().getGadgetHamburgerMenuItem('Re-order...').click();
 
       loginUtils.logoutFromAMI();
       cy.wait(100);
  });
  it('TC11-Click on Cancel button to close the Re-order error window',function(){

        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        browserGadgetUtils.setStructureType('!0EggVendorParent');
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        cy.get(cypressRelationBrandNoadd).check();
        cy.wait(1000);
       const thisGadget = () =>  cy.get('#ws-gadget-holder-VendorGadget');
       thisGadget().getGadgetHamburgerMenuItem('Re-order...').click();
       cy.get('#ws-dialog-cancel').click();

       loginUtils.logoutFromAMI();
  });
  
});

