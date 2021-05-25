import kebabCase from 'lodash.kebabcase';

export const getAllDesignersById = (state) => state.designer.get('designersById');
export const getDesignerById = (id) => (state) =>
  state.designer.getIn(['designersById', id]) || null;
export const getDesignerGarmentIds = () => (state) => state.designer.get('designerGarmentIds');
export const getDesignerInfoById = (id) => (state) =>
  state.designer
    .get('infoByDesignerId')
    .find(
      (item) =>
        (item.ids && item.ids.find((itemId) => itemId.toLowerCase() === id.toLowerCase())) ||
        item.id.toLowerCase() === id.toLowerCase()
    );
export const getAllDesigners = () => (state) => state.designer.get('infoByDesignerId');
export const getDesignerInfoByName = (name, isEqualCheck = false) => (state) =>
  state.designer
    .get('infoByDesignerId')
    .find((item) =>
      !isEqualCheck ? kebabCase(item.designerName) === name : item.designerName === name
    );
