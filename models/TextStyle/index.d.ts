import Color from '../Color';
// import { textAlignmentMap, verticalAlignmentMap } from '../../utils/maps';

declare class TextStyle {
  _class: 'textStyle';
  encodedAttributes: {
    MSAttributedStringFontAttribute: {
      _class: 'fontDescriptor';
      attributes: {
        name: string;
        size: number;
      };
    };
    MSAttributedStringColorAttribute: Color;
    textStyleVerticalAlignmentKey: number;
    underlineStyle: number;
    strikethroughStyle: number;
    kerning: number;
    paragraphStyle: {
      _class: 'paragraphStyle';
      alignment: number;
      minimumLineHeight: number;
      maximumLineHeight: number;
    };
  };
  verticalAlignment: number;

  constructor(args?: any, json?: any);

  getColor(): Color;

  getFontSize(): number;

  getFontName(): string;

  getLineHeight(): number;

  getKerning(): number;
}

export = TextStyle;
