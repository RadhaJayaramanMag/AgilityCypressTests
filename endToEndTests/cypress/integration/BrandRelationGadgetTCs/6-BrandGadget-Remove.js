const loginUtils = require('../../utils/loginUtils');
const changeDropdownUtils = require('../../utils/changeDropdownUtils');
const anyGadgetUtils = require('../../utils/anyGadgetUtils');
const browserGadgetUtils = require('../../utils/browserGadgetUtils');
const configOptionsUtils = require('../../utils/configOptionsUtils');

describe('Brand Relation Gadgets-',function(){
    const multiInstance = '#idx_1190';
    const removeBtn = '#erd-btn-remove';
    it('TC41-In Edit Relation window, select any one related object, then Remove button is enabled',function(){
        
        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        browserGadgetUtils.setStructureType('!0EggVendorParent');
        cy.get(multiInstance).click();
        cy.get('#erd-rel-cb-22066').check();

        cy.get(removeBtn).should('be.visible');
    
        loginUtils.logoutFromAMI();
        cy.wait(100);
       });
       it('TC42-:Enter name in object name field and select any related object, then both Remove and Replace buttons are enabled',function(){
        
        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        browserGadgetUtils.setStructureType('!0EggVendorParent');
        cy.get(multiInstance).click();
        cy.get('#erd-object-name').type('Bang Qa');
        cy.get(removeBtn).should('be.visible');
        cy.get('#erd-btn-replace').should('be.visible');
    
        loginUtils.logoutFromAMI();
        cy.wait(100);
       });

       it('NewTC-Create a single instance brand relation attribute',function(){
         const createAttribute = 'Create Attribute Definition...';
        loginUtils.loginToAMI('cypress1');
        changeDropdownUtils.changeWorkspace('Configuration Options');
        configOptionsUtils.selectTool('Attribute Definitions');
        configOptionsUtils.selectToolMenuItem(createAttribute);
        cy.get('#attrDefnDlg_name').type('ss1_singleBR');
        cy.get('#attrDefnDlg_type')
             .select('Brand Relation').should('have.value', '12');
        cy.get('#ws-dialog-submit').click();

        changeDropdownUtils.changeWorkspace('QA Relations With Browse');
        anyGadgetUtils.openGadgetOrGroup('Browse');
        browserGadgetUtils.setStructureType('Brands');
        browserGadgetUtils.setBrowseContext('Cypress', false);
        anyGadgetUtils.openGadgetOrGroup('Brand Relations');
        browserGadgetUtils.setStructureType('!0EggVendorParent');
        changeDropdownUtils.selectUserOption('Refresh');

        loginUtils.logoutFromAMI();
        cy.wait(100);
       });
       it('NewTC-Create a MultiInstance brand relation attribute',function(){
        const createAttribute = 'Create Attribute Definition...';
       loginUtils.loginToAMI('cypress1');
       changeDropdownUtils.changeWorkspace('Configuration Options');
       configOptionsUtils.selectTool('Attribute Definitions');
       configOptionsUtils.selectToolMenuItem(createAttribute);
       cy.get('#attrDefnDlg_name').type('ss1_multiBR');
       cy.get('#attrDefnDlg_type')
            .select('Brand Relation').should('have.value', '12');
       cy.get('#attrDefnDlg_allow-multiinstance').check();     
       cy.get('#ws-dialog-submit').click();

       changeDropdownUtils.changeWorkspace('QA Relations With Browse');
       anyGadgetUtils.openGadgetOrGroup('Browse');
       browserGadgetUtils.setStructureType('Brands');
       browserGadgetUtils.setBrowseContext('Cypress', false);
       anyGadgetUtils.openGadgetOrGroup('Brand Relations');
       browserGadgetUtils.setStructureType('!0EggVendorParent');
       changeDropdownUtils.selectUserOption('Refresh');

       loginUtils.logoutFromAMI();
      });
});     