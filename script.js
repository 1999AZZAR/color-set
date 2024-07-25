const colorSets = {
    // Red
    set1: ['#4c0000', '#660000', '#800000', '#990000', '#b30000', '#cc0000', '#e60000', '#ff0000', '#ff1a1a', '#ff3333'], // dark
    set2: ['#800000', '#990000', '#b30000', '#cc0000', '#e60000', '#ff0000', '#ff3333', '#ff6666', '#ff9999', '#ffcccc'], // light
    set3: ['#b30000', '#cc0000', '#e60000', '#ff0000', '#ff1a1a', '#ff3333', '#ff4d4d', '#ff6666', '#ff8080', '#ff9999'], // opaque
    set4: ['#ff0000', '#ff1a1a', '#ff3333', '#ff4d4d', '#ff6666', '#ff8080', '#ff9999', '#ffb3b3', '#ffcccc', '#ffe6e6'], // pastel
    set5: ['#ff4d4d80', '#ff666680', '#ff808080', '#ff999980', '#ffb3b380', '#ffcccc80', '#ffe6e680', '#ff8080', '#ff9999', '#ffb3b3'], // translucent

    // Pink (adjusted to be more distinct from red)
    set6: ['#660033', '#800040', '#99004d', '#b30059', '#cc0066', '#e60073', '#ff0080', '#ff33a2', '#ff66bf', '#ff99d9'], // dark
    set7: ['#ff004d', '#ff1961', '#ff3375', '#ff4d8a', '#ff669e', '#ff80a5', '#ff99b8', '#ffb3cb', '#ffccd1', '#ffe6f1'], // light
    set8: ['#b3004d', '#cc0057', '#e60062', '#ff007d', '#ff1a91', '#ff339e', '#ff4da6', '#ff66ae', '#ff80b6', '#ff99be'], // opaque
    set9: ['#ff4d8a', '#ff66a2', '#ff80ba', '#ff99d2', '#ffb3ea', '#ff99cc', '#ffb3d1', '#ffccdb', '#ffe6e8', '#ffebf0'], // pastel
    set10: ['#ff66b380', '#ff80bf80', '#ff99cc80', '#ffb3d980', '#ffccd580', '#ff4d8a80', '#ff66a280', '#ff80ba80', '#ff99d280', '#ffb3ea80'], // translucent

    // Purple
    set11: ['#2e004d', '#400066', '#520080', '#660099', '#7f00b3', '#9900cc', '#b300e6', '#cc00ff', '#d11aff', '#e666ff'], // dark
    set12: ['#9f33ff', '#a966ff', '#b366ff', '#be99ff', '#c7adff', '#d1b3ff', '#dbd9ff', '#e5e0ff', '#efe6ff', '#f4ecff'], // light
    set13: ['#660099', '#8000cc', '#9933ff', '#b366ff', '#cc80ff', '#d4aaff', '#ddccff', '#e6e0ff', '#efe6ff', '#f4ecff'], // opaque
    set14: ['#d1b3ff', '#d4aaff', '#dcb3ff', '#e4ccff', '#ecdbff', '#e5e0ff', '#efe6ff', '#f4ecff', '#dbccff', '#f2e8ff'], // pastel
    set15: ['#a366ff80', '#b399ff80', '#cc66ff80', '#d1aaff80', '#d4aaff80', '#dcb3ff80', '#e6ccff80', '#dbccff80', '#e5e0ff80', '#efe6ff80'], // translucent

    // Blue (adjusted to be more distinct from purple)
    set16: ['#003366', '#004080', '#004d99', '#005ab3', '#0066cc', '#0073e6', '#0080ff', '#3399ff', '#66b2ff', '#99ccff'], // dark
    set17: ['#3399ff', '#4da6ff', '#66b3ff', '#80bfff', '#99ccff', '#b3d9ff', '#cce6ff', '#d9f2ff', '#e6f7ff', '#f0faff'], // light
    set18: ['#0066cc', '#0073e6', '#0080ff', '#3399ff', '#66b2ff', '#80bfff', '#99ccff', '#b3d9ff', '#cce6ff', '#e6f2ff'], // opaque
    set19: ['#005ab3', '#0073e6', '#1a8cff', '#3399ff', '#4da6ff', '#66b3ff', '#80bfff', '#99ccff', '#b3d9ff', '#cce6ff'], // pastel
    set20: ['#80b3ff80', '#99ccff80', '#b3d9ff80', '#cce6ff80', '#d9f2ff80', '#e6f2ff80', '#f0faff80', '#e6f7ff80', '#cce6ff80', '#b3d9ff80'], // translucent

    // Green (adjusted to be more distinct from blue)
    set21: ['#004d1a', '#006633', '#007f4d', '#009966', '#00b380', '#00cc99', '#00e6b3', '#00ffcc', '#1affd6', '#33ffe0'], // dark
    set22: ['#1aff8c', '#33ff99', '#4dffa6', '#66ffb3', '#80ffc0', '#99ffcc', '#b3ffd9', '#ccffe6', '#e6fff2', '#f0fff9'], // light
    set23: ['#00b380', '#00cc99', '#00e6b3', '#00ffcc', '#1affd6', '#33ffe0', '#4dffea', '#66fff3', '#80fffc', '#99ffff'], // opaque
    set24: ['#00e673', '#00ff80', '#1aff8c', '#33ff99', '#4dffa6', '#66ffb3', '#80ffc0', '#99ffcc', '#b3ffd9', '#ccffe6'], // pastel
    set25: ['#80ffc080', '#99ffcc80', '#b3ffd980', '#ccffe680', '#dcb3ff80', '#e6fff280', '#f0fff980', '#e6ffdb80', '#ccffcc80', '#b3ffd980'], // translucent

    // Orange (adjusted to be more distinct from red)
    set26: ['#663300', '#804000', '#994d00', '#b35900', '#cc6600', '#e67300', '#ff8000', '#ff9933', '#ffb366', '#ffcc99'], // dark
    set27: ['#cc6600', '#e67300', '#ff8000', '#ff9933', '#ffb366', '#ffcc99', '#ffdbb3', '#ffe6cc', '#fff2e6', '#fff9f0'], // light
    set28: ['#ff8c1a', '#ffa64d', '#ffbf80', '#ffd9b3', '#fff2e6', '#ffe0cc', '#ffc299', '#ffa366', '#ff944d', '#ff8533'], // opaque
    set29: ['#994d00', '#b35900', '#cc6600', '#e67300', '#ff8000', '#ff9933', '#ffb366', '#ffcc99', '#ffdbb3', '#ffe6cc'], // pastel
    set30: ['#ffb36680', '#ffc08080', '#ffcc9980', '#ffd9b380', '#ffe6cc80', '#fff2e680', '#fff9f080', '#ffe6db80', '#ffcc9980', '#ffb36680'], // translucent

    // Yellow (adjusted to be more distinct from orange)
    set31: ['#666600', '#808000', '#999900', '#b3b300', '#cccc00', '#e6e600', '#ffff00', '#ffff33', '#ffff66', '#ffff99'], // dark
    set32: ['#ffff1a', '#ffff33', '#ffff4d', '#ffff66', '#ffff80', '#ffff99', '#ffffb3', '#ffffcc', '#ffffe6', '#fffff0'], // light
    set33: ['#b3b300', '#cccc00', '#e6e600', '#ffff00', '#ffff1a', '#ffff33', '#ffff4d', '#ffff66', '#ffff80', '#ffff99'], // pastel
    set34: ['#e6e600', '#ffff00', '#ffff4d', '#ffff80', '#ffffb3', '#ffffe6', '#ffffd9', '#ffffcc', '#ffffbf', '#ffffb3'], // opaque
    set35: ['#ffff0080', '#ffff3380', '#ffff6680', '#ffff9980', '#ffffb380', '#ffffcc80', '#ffffe680', '#fffff280', '#fffff980', '#fffffc80'], // translucent

    // Brown (adjusted to be more distinct from orange and red)
    set36: ['#331a00', '#4d2600', '#663300', '#804000', '#994d00', '#b35900', '#cc6600', '#e67300', '#ff8000', '#ff9933'], // dark
    set37: ['#804000', '#994d00', '#b35900', '#cc6600', '#e67300', '#ff8000', '#ff9933', '#ffb366', '#ffcc99', '#ffdbb3'], // light
    set38: ['#663300', '#804000', '#994d00', '#b35900', '#cc6600', '#e67300', '#ff8000', '#ff9933', '#ffb366', '#ffcc99'], // pastel
    set39: ['#994d00', '#b35900', '#cc6600', '#e67300', '#ff8000', '#ff9933', '#ffb366', '#ffcc99', '#ffdbb3', '#ffe6cc'], // opaque
    set40: ['#80400080', '#994d0080', '#b359008c', '#cc66008c', '#e673008c', '#ff80008c', '#ff99338c', '#ffb3668c', '#ffcc998c', '#ffdbb38c'], // translucent (adjusted opacity)

    // Black and Gray (adjusted for more variation)
    set41: ['#000000', '#1a1a1a', '#333333', '#4d4d4d', '#666666', '#808080', '#999999', '#b3b3b3', '#cccccc', '#e6e6e6'], // dark
    set42: ['#4d4d4d', '#666666', '#808080', '#999999', '#b3b3b3', '#cccccc', '#e6e6e6', '#f2f2f2', '#f5f5f5', '#ffffff'], // light
    set43: ['#262626', '#404040', '#595959', '#737373', '#8c8c8c', '#a6a6a6', '#bfbfbf', '#d9d9d9', '#f2f2f2', '#ffffff'], // pastel
    set44: ['#1a1a1a', '#333333', '#4d4d4d', '#666666', '#808080', '#999999', '#b3b3b3', '#cccccc', '#e6e6e6', '#ffffff'], // opaque
    set45: ['#00000080', '#1a1a1a80', '#33333380', '#4d4d4d80', '#66666680', '#80808080', '#99999980', '#b3b3b380', '#cccccc80', '#e6e6e680'], // translucent

    // Dual tone (adjusted for more distinct gradients)
    set46: ['#000080', '#1a1a99', '#3333b3', '#4d4dcc', '#6666e6', '#8080ff', '#9999ff', '#b3b3ff', '#ccccff', '#e6e6ff'], // Navy to Light Blue
    set47: ['#8B0000', '#a31313', '#bc2626', '#d43939', '#eb4d4d', '#ff6666', '#ff8080', '#ff9999', '#ffb3b3', '#ffcccc'], // Dark Red to Light Pink
    set48: ['#006400', '#137d13', '#269326', '#39aa39', '#4dc24d', '#66d966', '#80e680', '#99f299', '#b3ffb3', '#ccffcc'], // Dark Green to Light Green
    set49: ['#4B0082', '#5c1a93', '#6d33a3', '#7e4db4', '#8f66c4', '#a080d5', '#b199e5', '#c2b3f6', '#d3ccff', '#e4e6ff'], // Indigo to Lavender
    set50: ['#FF4500', '#ff5719', '#ff6933', '#ff7c4d', '#ff8f66', '#ffa280', '#ffb599', '#ffc8b3', '#ffdbcc', '#ffede6'], // Orange Red to Peach

    // ionic
    set51: ['#2F4F4F', '#3d5c5c', '#4b6969', '#597676', '#668383', '#749090', '#829d9d', '#90aaaa', '#9eb8b8', '#acc5c5'], // Dark Slate Gray to Light Slate Gray
    set52: ['#FFD700', '#ffd913', '#ffdc26', '#ffdf39', '#ffe24d', '#ffe566', '#ffe880', '#ffeb99', '#ffeeb3', '#fff2cc'], // Gold to Light Yellow
    set53: ['#8B008B', '#9d139d', '#b026b0', '#c239c2', '#d44dd4', '#e666e6', '#f280f2', '#ff99ff', '#ffb3ff', '#ffccff'], // Dark Magenta to Light Pink
    set54: ['#20B2AA', '#33bbb3', '#46c4bd', '#59cdc6', '#6cd6d0', '#80dfd9', '#93e8e3', '#a6f2ec', '#b9fbf6', '#ccffff'], // Light Sea Green to Light Cyan
    set55: ['#0D0D0D', '#262626', '#404040', '#595959', '#737373', '#8C8C8C', '#A6A6A6', '#BFBFBF', '#D9D9D9', '#F2F2F2'], // Dark Gray to Light Gray

    // Dark Green to Purple
    set56: ['#006400', '#1e5735', '#3c4a6a', '#5a3d9f', '#7830d4', '#9623ff', '#b41aff', '#d211ff', '#f008ff', '#ff00ff'],
    set57: ['#004a00', '#1d3f30', '#3a3460', '#572990', '#741ec0', '#9113f0', '#ae08ff', '#cb00ff', '#e800ff', '#ff00ff'],
    set58: ['#003000', '#1c292b', '#382256', '#541b81', '#7014ac', '#8c0dd7', '#a806ff', '#c400ff', '#e002ff', '#fc00ff'],
    set59: ['#001600', '#1b1326', '#36104c', '#510d72', '#6c0a98', '#8707be', '#a204e4', '#bd01ff', '#d800ff', '#f300ff'],
    set60: ['#000000', '#1a0021', '#340042', '#4e0063', '#680084', '#8200a5', '#9c00c6', '#b600e7', '#d000ff', '#ea00ff'],

    // Dark Yellow to Light Pink
    set61: ['#8B8B00', '#997a1e', '#a7693c', '#b5585a', '#c34778', '#d13696', '#df25b4', '#ed14d2', '#fb03f0', '#ff00ff'],
    set62: ['#999900', '#a68a24', '#b37b48', '#c06c6c', '#cd5d90', '#da4eb4', '#e73fd8', '#f430fc', '#ff21ff', '#ff12ff'],
    set63: ['#A6A600', '#b3972a', '#c08854', '#cd7978', '#da6aa8', '#e75bd2', '#f44cfc', '#ff3dff', '#ff2eff', '#ff1fff'],
    set64: ['#B3B300', '#c0a430', '#cd9560', '#da8690', '#e777c0', '#f468f0', '#ff59ff', '#ff4aff', '#ff3bff', '#ff2cff'],
    set65: ['#C0C000', '#cdb136', '#daa26c', '#e793a2', '#f484d8', '#ff75ff', '#ff66ff', '#ff57ff', '#ff48ff', '#ff39ff'],

    // Light Sea to Pastel Purple
    set66: ['#20B2AA', '#37a3b7', '#4e94c4', '#6585d1', '#7c76de', '#9367eb', '#aa58f8', '#c149ff', '#d83aff', '#ef2bff'],
    set67: ['#3CBDB6', '#51aec1', '#669fcc', '#7b90d7', '#9081e2', '#a572ed', '#ba63f8', '#cf54ff', '#e445ff', '#f936ff'],
    set68: ['#58C8C2', '#6bb9cb', '#7eaad4', '#919bdd', '#a48ce6', '#b77def', '#ca6ef8', '#dd5fff', '#f050ff', '#ff41ff'],
    set69: ['#74D3CE', '#85c4d5', '#96b5dc', '#a7a6e3', '#b897ea', '#c988f1', '#da79f8', '#eb6aff', '#fc5bff', '#ff4cff'],
    set70: ['#90DEDA', '#9fcfdf', '#aec0e4', '#bdb1e9', '#cca2ee', '#db93f3', '#ea84f8', '#f975fd', '#ff66ff', '#ff57ff'],

    // Brown to Chocolate
    set71: ['#8B4513', '#8d4014', '#903b15', '#923616', '#953117', '#972c18', '#9a2719', '#9c221a', '#9f1d1b', '#a1181c'],
    set72: ['#A0522D', '#a24d2e', '#a5482f', '#a74330', '#aa3e31', '#ac3932', '#af3433', '#b12f34', '#b42a35', '#b62536'],
    set73: ['#B5754E', '#b76f50', '#b96952', '#bb6354', '#bd5d56', '#bf5758', '#c1515a', '#c34b5c', '#c5455e', '#c73f60'],
    set74: ['#CA9873', '#cc9274', '#ce8c75', '#d08676', '#d28077', '#d47a78', '#d67479', '#d86e7a', '#da687b', '#dc627c'],
    set75: ['#DFBB9C', '#e1b59c', '#e3af9c', '#e5a99c', '#e7a39c', '#e99d9c', '#eb979c', '#ed919c', '#ef8b9c', '#f1859c'],

    // Light Black to Dark Orange
    set76: ['#3F3F3F', '#4b3935', '#57332b', '#632d21', '#6f2717', '#7b210d', '#871b03', '#931500', '#9f0f00', '#ab0900'],
    set77: ['#4F4F4F', '#5b4945', '#67433b', '#733d31', '#7f3727', '#8b311d', '#972b13', '#a32509', '#af1f00', '#bb1900'],
    set78: ['#5F5F5F', '#6b5955', '#77534b', '#834d41', '#8f4737', '#9b412d', '#a73b23', '#b33519', '#bf2f0f', '#cb2905'],
    set79: ['#6F6F6F', '#7b6965', '#87635b', '#935d51', '#9f5747', '#ab513d', '#b74b33', '#c34529', '#cf3f1f', '#db3915'],
    set80: ['#7F7F7F', '#8b7975', '#97736b', '#a36d61', '#af6757', '#bb614d', '#c75b43', '#d35539', '#df4f2f', '#eb4925'],

    // Ocean Green to Dark Blue
    set81: ['#48D1CC', '#40b9c8', '#38a1c4', '#3089c0', '#2871bc', '#2059b8', '#1841b4', '#1029b0', '#0811ac', '#0000A8'],
    set82: ['#40E0D0', '#38c8cc', '#30b0c8', '#2898c4', '#2080c0', '#1868bc', '#1050b8', '#0838b4', '#0020b0', '#0008AC'],
    set83: ['#20B2AA', '#1c9aa7', '#1882a4', '#146aa1', '#10529e', '#0c3a9b', '#082298', '#040a95', '#000092', '#00008F'],
    set84: ['#5F9EA0', '#548aa2', '#4976a4', '#3e62a6', '#334ea8', '#283aaa', '#1d26ac', '#1212ae', '#0700b0', '#0000B2'],
    set85: ['#008B8B', '#007793', '#00639b', '#004fa3', '#003bab', '#0027b3', '#0013bb', '#0000c3', '#0000cb', '#0000D3'],

    // Metal Yellow to Golden Black
    set86: ['#FFD700', '#e5be06', '#cca50c', '#b28c12', '#997318', '#7f5a1e', '#664124', '#4c282a', '#330f30', '#1A0000'],
    set87: ['#FFDF00', '#e6c608', '#ccad10', '#b39418', '#997b20', '#7f6228', '#664930', '#4c3038', '#331740', '#1A0000'],
    set88: ['#FFC000', '#e5aa04', '#cc9408', '#b27e0c', '#996810', '#7f5214', '#663c18', '#4c261c', '#331020', '#1A0000'],
    set89: ['#FFB400', '#e59e04', '#cc8808', '#b2720c', '#995c10', '#7f4614', '#663018', '#4c1a20', '#33041A', '#1A0000'],
    set90: ['#FFA700', '#e59004', '#cc7908', '#b26210', '#994b18', '#7f3420', '#661d28', '#4c0630', '#330039', '#1A0000'],

    // Dark Chocolate to Milky White
    set91: ['#3C1414', '#563630', '#70584c', '#8a7a68', '#a49c84', '#bebea0', '#d8e0bc', '#f2ffd8', '#fffff4', '#FFFFFF'],
    set92: ['#2C0D0D', '#48312a', '#645547', '#807964', '#9c9d81', '#b8c19e', '#d4e5bb', '#f0ffd8', '#fffff5', '#FFFFFF'],
    set93: ['#4A0404', '#612420', '#78443c', '#8f6458', '#a68474', '#bda490', '#d4c4ac', '#ebe4c8', '#ffffe4', '#FFFFFF'],
    set94: ['#330000', '#4d201c', '#674038', '#816054', '#9b8070', '#b5a08c', '#cfc0a8', '#e9e0c4', '#ffffe0', '#FFFFFF'],
    set95: ['#2B1100', '#462d1e', '#61493c', '#7c655a', '#978178', '#b29d96', '#cdb9b4', '#e8d5d2', '#fff1f0', '#FFFFFF'],

    // Sunset Gradient
    set96: ['#FF6B6B', '#FF8B6B', '#FFAB6B', '#FFCB6B', '#FFEB6B', '#FFFB8B', '#FFFBAB', '#FFFBCB', '#FFFBEB', '#FF69B4'],
    set97: ['#FF7F7F', '#FF9F7F', '#FFBF7F', '#FFDF7F', '#FFFF7F', '#FFFF9F', '#FFFFBF', '#FFFFDF', '#FFFFFF', '#FFF5EE'],
    set98: ['#FF8C8C', '#FFA78C', '#FFC28C', '#FFDD8C', '#FFF88C', '#F8FFA7', '#DDFFC2', '#C2FFDD', '#A7FFF8', '#8CF8FF'],
    set99: ['#FF9C9C', '#FFB49C', '#FFCC9C', '#FFE49C', '#FFFC9C', '#E4FFB4', '#CCFFCC', '#B4FFE4', '#9CFFFC', '#84E4FF'],
    set100: ['#FFA6A6', '#FFBEA6', '#FFD6A6', '#FFEEA6', '#FFFFA6', '#EEFFBE', '#D6FFD6', '#BEFFF2', '#A6FFFF', '#8EEEFF'],

    // Ocean Depths
    set101: ['#000080', '#00109A', '#0020B4', '#0030CE', '#0040E8', '#1E90FF', '#00BFFF', '#87CEFA', '#ADD8E6', '#E0FFFF'],
    set102: ['#00008B', '#0014A5', '#0028BF', '#003CD9', '#0050F3', '#1E90FF', '#00BFFF', '#87CEFA', '#ADD8E6', '#E0FFFF'],
    set103: ['#0000A0', '#0018BA', '#0030D4', '#0048EE', '#1E90FF', '#00BFFF', '#50D0FF', '#87CEFA', '#ADD8E6', '#E0FFFF'],
    set104: ['#0000B5', '#001CCF', '#0038E9', '#1E90FF', '#00BFFF', '#40C8FF', '#70D1FF', '#A0DAFF', '#C0E3FF', '#E0FFFF'],
    set105: ['#0000CA', '#0020E4', '#1E90FF', '#00BFFF', '#30C7FF', '#60CFFF', '#90D7FF', '#B0DFFF', '#D0E7FF', '#E0FFFF'],

    // Forest Tones
    set106: ['#4B2E2E', '#654321', '#855E42', '#8B4513', '#556B2F', '#6B8E23', '#228B22', '#32CD32', '#98FB98', '#ADFF2F'],
    set107: ['#3B1F1F', '#5B3A3A', '#7B5A5A', '#9B7A7A', '#4A5D28', '#5F7E1F', '#1E791E', '#2CB62C', '#89E089', '#9CE528'],
    set108: ['#4B2E2E', '#654321', '#7B4E4E', '#8B5E5E', '#506528', '#658A20', '#26951F', '#36D729', '#A2FFA2', '#B7FF3E'],
    set109: ['#4B3E3E', '#654F4F', '#856060', '#8B7B7B', '#5A7534', '#71A127', '#2AA726', '#3AE330', '#ACFFAC', '#C1FF4E'],
    set110: ['#4B4E4E', '#656F6F', '#857080', '#8B7B8B', '#5E7D3A', '#77AA2B', '#2EB52A', '#3EED34', '#B6FFB6', '#CBFF5E'],

    // Autumn Leaves
    set111: ['#8B4513', '#A0522D', '#CD853F', '#DEB887', '#D2691E', '#FF7F50', '#FF6347', '#FF4500', '#FFA500', '#FFD700'],
    set112: ['#7A3812', '#8F4D2C', '#AF7041', '#C69564', '#AC6A1C', '#E66839', '#DC5533', '#D33F1F', '#E99500', '#E8BF40'],
    set113: ['#693111', '#7E482B', '#915F43', '#AE8241', '#86691A', '#CD5722', '#C4471F', '#B7390D', '#D38500', '#D1A730'],
    set114: ['#582A10', '#6D432A', '#734E45', '#966F1E', '#604A18', '#B4460B', '#AC390B', '#9B3300', '#BD7500', '#BA8F20'],
    set115: ['#47230F', '#5C3E29', '#553D47', '#7E5C00', '#3A2B16', '#9B3500', '#942B00', '#7F2D00', '#A76500', '#A37710'],

    // Cosmic Purple
    set116: ['#4B0082', '#663399', '#8A2BE2', '#9370DB', '#BA55D3', '#DA70D6', '#EE82EE', '#DDA0DD', '#D8BFD8', '#E6E6FA'],
    set117: ['#3B0070', '#57308B', '#7631BF', '#8569C7', '#A348B1', '#C160BD', '#E075DD', '#C47ACC', '#C1A3C9', '#CFC2DF'],
    set118: ['#2B005E', '#47307D', '#6232A0', '#7363B3', '#8D3B93', '#A851A4', '#C268C6', '#AB6EBB', '#AA87BA', '#B89EC4'],
    set119: ['#1B004C', '#37306F', '#4D3381', '#615CA0', '#772E75', '#8E428B', '#A45BAF', '#925FB0', '#936BAB', '#A17AA9'],
    set120: ['#0B003A', '#273061', '#383462', '#4E558D', '#612157', '#743372', '#864E98', '#7950A5', '#7C4F9C', '#8A568E'],

    // Saturn
    set121: ['#3B3A30', '#5C5947', '#7D7A5F', '#9E9A77', '#BFB98F', '#E0D9A7', '#F3E9B7', '#FFF5C7', '#FFFAE7', '#FFFFF5'],
    set122: ['#4B4633', '#6C6C56', '#8D8D79', '#AEAE9B', '#CFCEA0', '#EFEFA5', '#F4F4BA', '#F9F9CF', '#FCFCE4', '#FFFFF2'],
    set123: ['#514B38', '#716D5C', '#919E80', '#B1BFA4', '#D1E0C8', '#F1F1D2', '#F5F5D8', '#F9F9DE', '#FCFCE4', '#FFFFF2'],
    set124: ['#5B5540', '#7C7866', '#9D9D8C', '#BEBEB2', '#DFDFC9', '#EFEFC0', '#F3F3C5', '#F7F7CA', '#FAFACF', '#FFFFF5'],
    set125: ['#665F48', '#878C6E', '#A9A993', '#CBC8B8', '#EDEDD5', '#EDEDC8', '#F1F1CD', '#F5F5D2', '#F9F9D7', '#FFFFF5'],

    // Jupiter
    set126: ['#362C28', '#5A4A43', '#7E6861', '#A2867F', '#C6A49D', '#EAC2BB', '#F4D4CA', '#FDE6D9', '#FCEAE3', '#FFF6F2'],
    set127: ['#4A3A32', '#6E5850', '#92676E', '#B6858C', '#D9A3AA', '#FDC1C8', '#FDE1DD', '#FFF1ED', '#FFF7F3', '#FFFDF9'],
    set128: ['#3E3029', '#624E46', '#865D63', '#AA7B81', '#CE99A0', '#F2B7BF', '#F4CFD5', '#F7E7EB', '#FAF7F1', '#FFFDF9'],
    set129: ['#513C33', '#735A51', '#97696F', '#BA878D', '#DDA5AB', '#FFC3C9', '#FFE1E0', '#FFF0F2', '#FFF6F8', '#FFFEFD'],
    set130: ['#5B463C', '#7D625D', '#A0807F', '#C39E9E', '#E6BDBD', '#FFE6E6', '#FFF1F1', '#FFF8F8', '#FFFDFD', '#FFFFFF'],

    // Neptune
    set131: ['#000033', '#000066', '#000099', '#0000CC', '#0000FF', '#3333FF', '#6666FF', '#9999FF', '#CCCCFF', '#E5E5FF'],
    set132: ['#000035', '#000068', '#00009B', '#0000CE', '#0000FF', '#3434FF', '#6767FF', '#9A9AFF', '#CDCDFF', '#E6E6FF'],
    set133: ['#000037', '#00006A', '#00009D', '#0000D0', '#0000FF', '#3535FF', '#6868FF', '#9B9BFF', '#CECEFF', '#E7E7FF'],
    set134: ['#000039', '#00006C', '#00009F', '#0000D2', '#0000FF', '#3636FF', '#6969FF', '#9C9CFF', '#CFCFFF', '#E8E8FF'],
    set135: ['#00003B', '#00006E', '#0000A1', '#0000D4', '#0000FF', '#3737FF', '#6A6AFF', '#9D9DFF', '#D0D0FF', '#E9E9FF'],

    // Sun
    set136: ['#FF4500', '#FF6347', '#FF7F50', '#FF8C00', '#FFA500', '#FFB347', '#FFCC66', '#FFD700', '#FFEC8B', '#FFFACD'],
    set137: ['#FF4000', '#FF6047', '#FF7C50', '#FF8900', '#FF9F00', '#FFB247', '#FFCC66', '#FFD500', '#FFEB8B', '#FFF8CD'],
    set138: ['#FF3B00', '#FF5B47', '#FF7750', '#FF8400', '#FF9A00', '#FFAD47', '#FFC766', '#FFD000', '#FFE88B', '#FFF6CD'],
    set139: ['#FF3600', '#FF5647', '#FF7250', '#FF7F00', '#FF9500', '#FFA847', '#FFC066', '#FFCA00', '#FFE48B', '#FFF4CD'],
    set140: ['#FF3100', '#FF5147', '#FF6D50', '#FF7A00', '#FF9000', '#FFA347', '#FFBD66', '#FFC400', '#FFE08B', '#FFF2CD'],

    // Gold
    set141: ['#4d4000', '#665500', '#806600', '#996600', '#b38000', '#cc9900', '#e6b300', '#ffcc00', '#ffd633', '#ffdf66'], // dark
    set142: ['#b38000', '#cc9900', '#e6b300', '#ffcc00', '#ffd633', '#ffdf66', '#ffe699', '#ffedcc', '#fff2e6', '#fff9f2'], // light
    set143: ['#806600', '#996600', '#b38000', '#cc9900', '#e6b300', '#ffcc00', '#ffd633', '#ffe066', '#ffe699', '#ffedcc'], // opaque
    set144: ['#ffcc00', '#ffd633', '#ffdf66', '#ffe699', '#ffedcc', '#fff2e6', '#fff6cc', '#fff9e6', '#fffccc', '#fffde6'], // pastel
    set145: ['#ffd63380', '#ffdf6680', '#ffe69980', '#ffedcc80', '#fff2e680', '#fff9f280', '#fff6cc80', '#ffdf3380', '#ffe06680', '#ffcc0080'], // translucent

    // Teal
    set146: ['#004d4d', '#006666', '#007f7f', '#009999', '#00b3b3', '#00cccc', '#00e6e6', '#00ffff', '#33ffff', '#66ffff'], // dark
    set147: ['#00b3b3', '#00cccc', '#00e6e6', '#00ffff', '#33ffff', '#66ffff', '#99ffff', '#ccffff', '#e6ffff', '#f0ffff'], // light
    set148: ['#007f7f', '#009999', '#00b3b3', '#00cccc', '#00e6e6', '#00ffff', '#33ffff', '#66ffff', '#99ffff', '#ccffff'], // opaque
    set149: ['#00ffff', '#33ffff', '#66ffff', '#99ffff', '#ccffff', '#e6ffff', '#f0ffff', '#f5ffff', '#faffff', '#fdffff'], // pastel
    set150: ['#33ffff80', '#66ffff80', '#99ffff80', '#ccffff80', '#e6ffff80', '#f0ffff80', '#faffff80', '#00e6e680', '#00cccc80', '#00b3b380'], // translucent

    // Burgundy
    set151: ['#4d0019', '#66001f', '#800026', '#99002c', '#b30032', '#cc0039', '#e6003f', '#ff0045', '#ff194d', '#ff3355'], // dark
    set152: ['#b30032', '#cc0039', '#e6003f', '#ff0045', '#ff194d', '#ff3355', '#ff4d66', '#ff6677', '#ff8088', '#ff9999'], // light
    set153: ['#800026', '#99002c', '#b30032', '#cc0039', '#e6003f', '#ff0045', '#ff194d', '#ff3355', '#ff4d66', '#ff6677'], // opaque
    set154: ['#ff0045', '#ff194d', '#ff3355', '#ff4d66', '#ff6677', '#ff8088', '#ff9999', '#ffb3aa', '#ffcccc', '#ffe6dd'], // pastel
    set155: ['#ff194d80', '#ff335580', '#ff4d6680', '#ff667780', '#ff808880', '#ff999980', '#ffb3aa80', '#ffcccc80', '#ffe6dd80', '#ff004580'], // translucent

    // Olive
    set156: ['#4d4d00', '#666600', '#808000', '#999900', '#b3b300', '#cccc00', '#e6e600', '#ffff00', '#ffff33', '#ffff66'], // dark
    set157: ['#b3b300', '#cccc00', '#e6e600', '#ffff00', '#ffff33', '#ffff66', '#ffff99', '#ffffcc', '#ffffe6', '#fffff0'], // light
    set158: ['#808000', '#999900', '#b3b300', '#cccc00', '#e6e600', '#ffff00', '#ffff33', '#ffff66', '#ffff99', '#ffffcc'], // opaque
    set159: ['#ffff00', '#ffff33', '#ffff66', '#ffff99', '#ffffcc', '#ffffe6', '#fffff0', '#fffff2', '#fffff4', '#fffff6'], // pastel
    set160: ['#ffff3380', '#ffff6680', '#ffff9980', '#ffffcc80', '#ffffe680', '#fffff080', '#fffff280', '#ffffe680', '#ffffcc80', '#ffff3380'], // translucent

    // Coral
    set161: ['#663300', '#804000', '#994d00', '#b35900', '#cc6600', '#e67300', '#ff8000', '#ff9933', '#ffb366', '#ffcc99'], // dark
    set162: ['#cc6600', '#e67300', '#ff8000', '#ff9933', '#ffb366', '#ffcc99', '#ffdbb3', '#ffe6cc', '#fff2e6', '#fff9f0'], // light
    set163: ['#994d00', '#b35900', '#cc6600', '#e67300', '#ff8000', '#ff9933', '#ffb366', '#ffcc99', '#ffdbb3', '#ffe6cc'], // opaque
    set164: ['#ff8000', '#ff9933', '#ffb366', '#ffcc99', '#ffdbb3', '#ffe6cc', '#fff2e6', '#fff9f0', '#fffde6', '#fffef2'], // pastel
    set165: ['#ff993380', '#ffb36680', '#ffcc9980', '#ffdbb380', '#ffe6cc80', '#fff2e680', '#fff9f080', '#ffe6cc80', '#ffcc9980', '#ff993380'], // translucent

    // Plum
    set166: ['#4d004d', '#660066', '#800080', '#990099', '#b300b3', '#cc00cc', '#e600e6', '#ff00ff', '#ff33ff', '#ff66ff'], // dark
    set167: ['#b300b3', '#cc00cc', '#e600e6', '#ff00ff', '#ff33ff', '#ff66ff', '#ff99ff', '#ffccff', '#ffe6ff', '#fff0ff'], // light
    set168: ['#800080', '#990099', '#b300b3', '#cc00cc', '#e600e6', '#ff00ff', '#ff33ff', '#ff66ff', '#ff99ff', '#ffccff'], // opaque
    set169: ['#ff00ff', '#ff33ff', '#ff66ff', '#ff99ff', '#ffccff', '#ffe6ff', '#fff0ff', '#fff2ff', '#fff4ff', '#fff6ff'], // pastel
    set170: ['#ff33ff80', '#ff66ff80', '#ff99ff80', '#ffccff80', '#ffe6ff80', '#fff0ff80', '#fff2ff80', '#ffe6ff80', '#ffccff80', '#ff33ff80'], // translucent

    // Mint
    set171: ['#003d33', '#005946', '#007359', '#008c6b', '#00a67e', '#00bf91', '#00d8a3', '#00f2b6', '#33f2c6', '#66f2d6'], // dark
    set172: ['#00a67e', '#00bf91', '#00d8a3', '#00f2b6', '#33f2c6', '#66f2d6', '#99f2e6', '#ccf2f6', '#e6f2ff', '#f0f9ff'], // light
    set173: ['#007359', '#008c6b', '#00a67e', '#00bf91', '#00d8a3', '#00f2b6', '#33f2c6', '#66f2d6', '#99f2e6', '#ccf2f6'], // opaque
    set174: ['#00f2b6', '#33f2c6', '#66f2d6', '#99f2e6', '#ccf2f6', '#e6f2ff', '#f0f9ff', '#f5ffff', '#faffff', '#fdffff'], // pastel
    set175: ['#33f2c680', '#66f2d680', '#99f2e680', '#ccf2f680', '#e6f2ff80', '#f0f9ff80', '#faffff80', '#ccf2f680', '#99f2e680', '#33f2c680'], // translucent

    // Amber
    set176: ['#663300', '#804000', '#994d00', '#b35900', '#cc6600', '#e67300', '#ff8000', '#ff9933', '#ffb366', '#ffcc99'], // dark
    set177: ['#cc6600', '#e67300', '#ff8000', '#ff9933', '#ffb366', '#ffcc99', '#ffdbb3', '#ffe6cc', '#fff2e6', '#fff9f0'], // light
    set178: ['#994d00', '#b35900', '#cc6600', '#e67300', '#ff8000', '#ff9933', '#ffb366', '#ffcc99', '#ffdbb3', '#ffe6cc'], // opaque
    set179: ['#ff8000', '#ff9933', '#ffb366', '#ffcc99', '#ffdbb3', '#ffe6cc', '#fff2e6', '#fff9f0', '#fffde6', '#fffef2'], // pastel
    set180: ['#ff993380', '#ffb36680', '#ffcc9980', '#ffdbb380', '#ffe6cc80', '#fff2e680', '#fff9f080', '#ffe6cc80', '#ffcc9980', '#ff993380'], // translucent

    // Sapphire
    set181: ['#001f3f', '#003366', '#004080', '#004c99', '#0059b3', '#0066cc', '#0073e6', '#1a80ff', '#3399ff', '#4db3ff'], // dark
    set182: ['#0059b3', '#0066cc', '#0073e6', '#1a80ff', '#3399ff', '#4db3ff', '#66ccff', '#80e6ff', '#99f2ff', '#b3ffff'], // light
    set183: ['#004080', '#004c99', '#0059b3', '#0066cc', '#0073e6', '#1a80ff', '#3399ff', '#4db3ff', '#66ccff', '#80e6ff'], // opaque
    set184: ['#0073e6', '#1a80ff', '#3399ff', '#4db3ff', '#66ccff', '#80e6ff', '#99f2ff', '#b3ffff', '#ccefff', '#e6ffff'], // pastel
    set185: ['#1a80ff80', '#3399ff80', '#4db3ff80', '#66ccff80', '#80e6ff80', '#99f2ff80', '#b3ffff80', '#80e6ff80', '#66ccff80', '#1a80ff80'], // translucent

    // Ruby
    set186: ['#3f0000', '#660000', '#800000', '#990000', '#b30000', '#cc0000', '#e60000', '#ff1a1a', '#ff3333', '#ff4d4d'], // dark
    set187: ['#b30000', '#cc0000', '#e60000', '#ff1a1a', '#ff3333', '#ff4d4d', '#ff6666', '#ff8080', '#ff9999', '#ffb3b3'], // light
    set188: ['#800000', '#990000', '#b30000', '#cc0000', '#e60000', '#ff1a1a', '#ff3333', '#ff4d4d', '#ff6666', '#ff8080'], // opaque
    set189: ['#e60000', '#ff1a1a', '#ff3333', '#ff4d4d', '#ff6666', '#ff8080', '#ff9999', '#ffb3b3', '#ffcccc', '#ffe6e6'], // pastel
    set190: ['#ff1a1a80', '#ff333380', '#ff4d4d80', '#ff666680', '#ff808080', '#ff999980', '#ffb3b380', '#ff808080', '#ff666680', '#ff1a1a80'], // translucent

    // Orchid
    set191: ['#4d0033', '#66004d', '#800066', '#990080', '#b30099', '#cc00b3', '#e600cc', '#ff1ae6', '#ff33ff', '#ff4dff'], // dark
    set192: ['#b30099', '#cc00b3', '#e600cc', '#ff1ae6', '#ff33ff', '#ff4dff', '#ff66ff', '#ff80ff', '#ff99ff', '#ffb3ff'], // light
    set193: ['#800066', '#990080', '#b30099', '#cc00b3', '#e600cc', '#ff1ae6', '#ff33ff', '#ff4dff', '#ff66ff', '#ff80ff'], // opaque
    set194: ['#e600cc', '#ff1ae6', '#ff33ff', '#ff4dff', '#ff66ff', '#ff80ff', '#ff99ff', '#ffb3ff', '#ffccff', '#ffe6ff'], // pastel
    set195: ['#ff1ae680', '#ff33ff80', '#ff4dff80', '#ff66ff80', '#ff80ff80', '#ff99ff80', '#ffb3ff80', '#ff80ff80', '#ff66ff80', '#ff1ae680'], // translucent

    // Silver
    set196: ['#1a1a1a', '#333333', '#4d4d4d', '#666666', '#808080', '#999999', '#b3b3b3', '#cccccc', '#e6e6e6', '#ffffff'], // dark
    set197: ['#808080', '#999999', '#b3b3b3', '#cccccc', '#e6e6e6', '#f2f2f2', '#f5f5f5', '#f7f7f7', '#fafafa', '#ffffff'], // light
    set198: ['#4d4d4d', '#666666', '#808080', '#999999', '#b3b3b3', '#cccccc', '#e6e6e6', '#f2f2f2', '#f5f5f5', '#fafafa'], // opaque
    set199: ['#cccccc', '#d9d9d9', '#e6e6e6', '#f2f2f2', '#f5f5f5', '#f7f7f7', '#fafafa', '#fcfcfc', '#fdfdfd', '#ffffff'], // pastel
    set200: ['#80808080', '#99999980', '#b3b3b380', '#cccccc80', '#e6e6e680', '#f2f2f280', '#f5f5f580', '#f7f7f780', '#fafafa80', '#ffffff80'], // translucent

    // Dualtone (Blue and Orange)
    set201: ['#001f3f', '#003366', '#004080', '#0059b3', '#0073e6', '#ff6600', '#ff751a', '#ff8533', '#ff944d', '#ffa366'], // dark
    set202: ['#4d88ff', '#66a3ff', '#80bfff', '#99ccff', '#b3e0ff', '#ff9966', '#ffad80', '#ffb399', '#ffbfaf', '#ffcccb'], // light
    set203: ['#004080', '#0059b3', '#0073e6', '#3399ff', '#66b2ff', '#ff8533', '#ff944d', '#ffa366', '#ffb380', '#ffbf99'], // opaque
    set204: ['#b3d9ff', '#cce6ff', '#e6f2ff', '#f2faff', '#f5fcff', '#ffcc99', '#ffddcc', '#ffefe0', '#fff7f2', '#fffaf5'], // pastel
    set205: ['#0073e680', '#3399ff80', '#66b2ff80', '#99ccff80', '#cce6ff80', '#ff944d80', '#ffa36680', '#ffb38080', '#ffbf9980', '#ffcccb80'], // translucent

    // Dualtone (Green and Pink)
    set206: ['#004d00', '#006600', '#008000', '#009933', '#00b366', '#990033', '#b30040', '#cc0052', '#e60066', '#ff007f'], // dark
    set207: ['#4dff4d', '#66ff66', '#80ff80', '#99ff99', '#b3ffb3', '#ff66b2', '#ff80bf', '#ff99cc', '#ffb3d9', '#ffccf2'], // light
    set208: ['#008000', '#009933', '#00b366', '#00cc80', '#00e699', '#cc0052', '#e60066', '#ff007f', '#ff3399', '#ff66b2'], // opaque
    set209: ['#b3ffb3', '#ccffcc', '#e6ffe6', '#f2fff2', '#fafffa', '#ffccf2', '#ffe6fa', '#fff2fc', '#fffbff', '#ffffff'], // pastel
    set210: ['#00b36680', '#00cc8080', '#00e69980', '#00ffb380', '#66ffb380', '#e6006680', '#ff007f80', '#ff339980', '#ff66b280', '#ff80bf80'], // translucent

    // Dualtone (Purple and Yellow)
    set211: ['#2e004d', '#3b0066', '#470080', '#530099', '#6600cc', '#666600', '#808000', '#999900', '#b3b300', '#cccc00'], // dark
    set212: ['#b380ff', '#bf99ff', '#ccb3ff', '#d9ccff', '#e6e6ff', '#ffffb3', '#ffffcc', '#ffffe6', '#fffff2', '#fffffa'], // light
    set213: ['#470080', '#530099', '#6600cc', '#8000ff', '#9933ff', '#999900', '#b3b300', '#cccc00', '#e6e600', '#ffff00'], // opaque
    set214: ['#d9ccff', '#e6e6ff', '#f2f2ff', '#fafffa', '#fbfaff', '#ffffcc', '#ffffe6', '#fffff2', '#fffff7', '#ffffff'], // pastel
    set215: ['#6600cc80', '#8000ff80', '#9933ff80', '#b366ff80', '#cc99ff80', '#cccc0080', '#e6e60080', '#ffff0080', '#ffff3380', '#ffff6680'], // translucent

    // Dualtone (Red and Blue)
    set216: ['#660000', '#800000', '#990000', '#b30000', '#cc0000', '#000066', '#000080', '#000099', '#0000b3', '#0000cc'], // dark
    set217: ['#ff9999', '#ffb3b3', '#ffcccc', '#ffe6e6', '#ffffff', '#9999ff', '#b3b3ff', '#ccccff', '#e6e6ff', '#f2f2ff'], // light
    set218: ['#990000', '#b30000', '#cc0000', '#e60000', '#ff0000', '#000099', '#0000b3', '#0000cc', '#0000e6', '#0000ff'], // opaque
    set219: ['#ffe6e6', '#fff2f2', '#fffbfb', '#fffcfc', '#ffffff', '#e6e6ff', '#f2f2ff', '#fbfbff', '#fcfcff', '#ffffff'], // pastel
    set220: ['#cc000080', '#e6000080', '#ff000080', '#ff333380', '#ff666680', '#0000cc80', '#0000e680', '#0000ff80', '#3333ff80', '#6666ff80'], // translucen

    // Dualtone (Teal and Coral)
    set221: ['#003d3d', '#004d4d', '#006666', '#008080', '#009999', '#ff4d4d', '#ff6666', '#ff7f7f', '#ff9999', '#ffb3b3'], // dark
    set222: ['#33cccc', '#66cccc', '#99cccc', '#cce0e0', '#e6f2f2', '#ff9999', '#ffb3b3', '#ffcccc', '#ffe6e6', '#fff2f2'], // light
    set223: ['#006666', '#008080', '#009999', '#33cccc', '#66cccc', '#ff7f7f', '#ff9999', '#ffb3b3', '#ffcccc', '#ffe6e6'], // opaque
    set224: ['#cce0e0', '#e0f2f2', '#f2f9f9', '#f9fcfc', '#fcffff', '#ffcccc', '#ffe6e6', '#fff2f2', '#fff7f7', '#ffffff'], // pastel
    set225: ['#00999980', '#33cccc80', '#66cccc80', '#99cccc80', '#cce0e080', '#ff7f7f80', '#ff999980', '#ffb3b380', '#ffcccc80', '#ffe6e680'], // translucent

    // Dualtone (Orange and Teal)
    set226: ['#cc6600', '#e67a00', '#ff8c00', '#ff9933', '#ffb84d', '#004d4d', '#006666', '#007777', '#008080', '#009999'], // dark
    set227: ['#ffb84d', '#ffcc99', '#ffe5cc', '#fff2e6', '#fff9f2', '#00b3b3', '#00cccc', '#66d9e0', '#99e0e0', '#cce6e6'], // light
    set228: ['#ff9933', '#ffb84d', '#ffcc99', '#ffe5cc', '#fff2e6', '#007777', '#008080', '#009999', '#33cccc', '#66cccc'], // opaque
    set229: ['#ffe5cc', '#ffebd9', '#fef0e6', '#fef7f2', '#ffffff', '#b3e0e0', '#cce6e6', '#e0f2f2', '#e6f9f9', '#f2fcfc'], // pastel
    set230: ['#ff993380', '#ffb84d80', '#ffcc9980', '#ffe5cc80', '#fff2e680', '#00777780', '#00808080', '#00999980', '#33cccc80', '#66cccc80'], // translucent

    // Dualtone (Maroon and Gold)
    set231: ['#4d0000', '#660000', '#800000', '#990000', '#b30000', '#ffd700', '#ffcc00', '#ffb300', '#ff9900', '#ff8000'], // dark
    set232: ['#998760', '#b3a073', '#d0c4a6', '#e0d9c1', '#f2f2e6', '#ffd700', '#ffcc00', '#ffb300', '#ff9900', '#ff8000'], // light
    set233: ['#800000', '#990000', '#b30000', '#cc0000', '#e60000', '#ffb300', '#ffcc00', '#ffd700', '#ff9900', '#ff8000'], // opaque
    set234: ['#e0d9c1', '#f2f2e6', '#ffffff', '#cce0ff', '#d9e6ff', '#66b3ff', '#99ccff', '#b3e0ff', '#cce6ff', '#e6f2ff'], // pastel
    set235: ['#b3000080', '#cc000080', '#e6000080', '#ff800080', '#ff990080', '#ffd70080', '#ffcc0080', '#ffb30080', '#ff990080', '#ff800080'], // translucent

    // Dualtone (Aqua and Purple)
    set236: ['#003d3d', '#004d4d', '#006666', '#007f7f', '#009999', '#4d004d', '#6a006a', '#800080', '#993399', '#b366b3'], // dark
    set237: ['#00cccc', '#33cccc', '#66cccc', '#99cccc', '#cce0e0', '#cc99ff', '#d9b3ff', '#e6ccff', '#f2e6ff', '#f9f2ff'], // light
    set238: ['#007f7f', '#009999', '#33cccc', '#66cccc', '#99cccc', '#800080', '#993399', '#b366b3', '#cc99ff', '#e6ccff'], // opaque
    set239: ['#cce0e0', '#e0f2f2', '#f2f9f9', '#f9fcfc', '#fcffff', '#d9b3ff', '#e6ccff', '#f2e6ff', '#f9f2ff', '#ffffff'], // pastel
    set240: ['#00999980', '#33cccc80', '#66cccc80', '#99cccc80', '#cce0e080', '#99339980', '#b366b380', '#cc99ff80', '#e6ccff80', '#f2e6ff80'], // translucent

    // Dualtone (Brown and Sky Blue)
    set241: ['#3d2b1f', '#4d3f2f', '#665c3f', '#7f704f', '#998760', '#00b3e6', '#1a8cff', '#4da3ff', '#66b3ff', '#99ccff'], // dark
    set242: ['#998760', '#b3a073', '#d0c4a6', '#e0d9c1', '#f2f2e6', '#66b3ff', '#99ccff', '#cce0ff', '#d9e6ff', '#e6f2ff'], // light
    set243: ['#665c3f', '#7f704f', '#998760', '#b3a073', '#d0c4a6', '#66b3ff', '#99ccff', '#cce0ff', '#d9e6ff', '#e6f2ff'], // opaque
    set244: ['#e0d9c1', '#f2f2e6', '#ffffff', '#cce0ff', '#d9e6ff', '#66b3ff', '#99ccff', '#b3e0ff', '#cce6ff', '#e6f2ff'], // pastel
    set245: ['#7f704f80', '#99876080', '#b3a07380', '#d0c4a680', '#e0d9c180', '#66b3ff80', '#99ccff80', '#cce0ff80', '#d9e6ff80', '#e6f2ff80'], // translucent

    // Dualtone (Indigo and Gold)
    set246: ['#002d72', '#003d8f', '#004dbf', '#0063ff', '#007bff', '#f8c100', '#f9d733', '#fadc66', '#f8e399', '#f9f1cc'], // dark
    set247: ['#004dbf', '#0056e5', '#3366ff', '#5c80ff', '#8aa0ff', '#f9d733', '#f9e066', '#f9ec99', '#f9f1cc', '#faf8e6'], // light
    set248: ['#002d72', '#003d8f', '#004dbf', '#0063ff', '#007bff', '#f9d733', '#fadc66', '#f8e399', '#f9f1cc', '#faf8e6'], // opaque
    set249: ['#5c80ff', '#8aa0ff', '#aabfff', '#c6d9ff', '#e0eaff', '#f9d733', '#fadc66', '#f8e399', '#f9f1cc', '#faf8e6'], // pastel
    set250: ['#004dbf80', '#0063ff80', '#007bff80', '#5c80ff80', '#8aa0ff80', '#f9d73380', '#f8c10080', '#f9e06680', '#f8e39980', '#f9f1cc80'], // translucent

    // Dualtone (Turquoise and Magenta)
    set251: ['#008080', '#009999', '#00b3b3', '#00cccc', '#00e6e6', '#c71585', '#d24d77', '#d96d9e', '#e08ab5', '#e8a2c0'], // dark
    set252: ['#00e6e6', '#33f2f2', '#66ffff', '#99ffff', '#cceeff', '#d96d9e', '#f2a6b0', '#f2bcc1', '#f9d3d9', '#fbeef3'], // light
    set253: ['#00b3b3', '#00cccc', '#00e6e6', '#33f2f2', '#66ffff', '#d96d9e', '#e08ab5', '#e8a2c0', '#f2bcc1', '#f9d3d9'], // opaque
    set254: ['#99ffff', '#cceeff', '#e0f2f2', '#f2f9f9', '#f9fcfc', '#f2a6b0', '#f9d3d9', '#fbeef3', '#f9d8e1', '#ffffff'], // pastel
    set255: ['#00b3b380', '#00cccc80', '#00e6e680', '#33f2f280', '#66ffff80', '#d96d9e80', '#e08ab580', '#e8a2c080', '#f2bcc180', '#f9d3d980'], // translucent

    // Dualtone (Burgundy and Light Grey)
    set256: ['#4d0000', '#660000', '#800000', '#990000', '#b30000', '#d1d3d4', '#e0e3e4', '#e6e8e9', '#f2f3f4', '#f8f9fa'], // dark
    set257: ['#b30000', '#cc0000', '#e60000', '#ff4d4d', '#ff9999', '#d1d3d4', '#e0e3e4', '#e6e8e9', '#f2f3f4', '#f8f9fa'], // light
    set258: ['#800000', '#990000', '#b30000', '#cc0000', '#e60000', '#e0e3e4', '#e6e8e9', '#f2f3f4', '#f8f9fa', '#ffffff'], // opaque
    set259: ['#d1d3d4', '#e0e3e4', '#e6e8e9', '#f2f3f4', '#f8f9fa', '#b3b3b3', '#d9d9d9', '#e0e0e0', '#e6e6e6', '#f2f2f2'], // pastel
    set260: ['#80000080', '#99000080', '#b3000080', '#cc000080', '#e6000080', '#d1d3d480', '#e0e3e480', '#e6e8e980', '#f2f3f480', '#f8f9fa80'], // translucent

    // Tri-tone (Sunset Orange, Midnight Blue, and Light Gray)
    set261: ['#ff4500', '#ff5733', '#ff6f4f', '#ff8c66', '#ffa07a', '#003366', '#003d80', '#004080', '#004d99', '#0056b3'], // dark
    set262: ['#ffa07a', '#ff8c66', '#ff6f4f', '#ff5733', '#ff4500', '#4a4a4a', '#6e6e6e', '#8f8f8f', '#b2b2b2', '#d9d9d9'], // light
    set263: ['#ff5733', '#ff6f4f', '#ff8c66', '#ffa07a', '#ffb3a6', '#003d80', '#004080', '#004d99', '#0056b3', '#0073e6'], // opaque
    set264: ['#ff8c66', '#ffa07a', '#ffb3a6', '#f2d6d4', '#f9e9e7', '#003366', '#004080', '#0056b3', '#0073e6', '#b3b3b3'], // pastel
    set265: ['#ff450080', '#ff573380', '#ff6f4f80', '#ff8c6680', '#ffa07a80', '#003d8080', '#00408080', '#004d9980', '#0056b380', '#0073e680'], // translucent

    // Tri-tone (Forest Green, Amber, and Cream)
    set266: ['#004d00', '#006600', '#008000', '#009933', '#00b366', '#ffbf00', '#ffcc33', '#ffda66', '#ffeb99', '#fff2cc'], // dark
    set267: ['#00b366', '#33cc66', '#66d966', '#99e099', '#b3f2b3', '#ffda66', '#ffeb99', '#fff2cc', '#ffffe0', '#f9f9f9'], // light
    set268: ['#008000', '#009933', '#00b366', '#66d966', '#99e099', '#ffcc33', '#ffda66', '#ffeb99', '#fff2cc', '#ffffe0'], // opaque
    set269: ['#66d966', '#99e099', '#b3f2b3', '#d6f2d6', '#e6f9e6', '#ffeb99', '#fff2cc', '#ffffe0', '#f9f9f9', '#ffffff'], // pastel
    set270: ['#00800080', '#00993380', '#00b36680', '#66d96680', '#99e09980', '#ffda6680', '#ffeb9980', '#fff2cc80', '#ffffe080', '#f9f9f980'], // translucent

    // Tri-tone (Navy Blue, Light Cyan, and Coral)
    set271: ['#001f3f', '#003366', '#004080', '#0059b3', '#0073e6', '#ff6f61', '#ff7f7f', '#ff8c66', '#ff9a75', '#ffb3a6'], // dark
    set272: ['#0073e6', '#3399ff', '#66b3ff', '#99ccff', '#cce0ff', '#ff8c66', '#ff9a75', '#ffb3a6', '#f2c2b0', '#f9e4e1'], // light
    set273: ['#003366', '#004080', '#0059b3', '#0073e6', '#3399ff', '#ff7f7f', '#ff8c66', '#ff9a75', '#ffb3a6', '#f2c2b0'], // opaque
    set274: ['#66b3ff', '#99ccff', '#cce0ff', '#e0f2ff', '#f2f9ff', '#ff8c66', '#ff9a75', '#ffb3a6', '#f2c2b0', '#f9e4e1'], // pastel
    set275: ['#00336680', '#00408080', '#0059b380', '#0073e680', '#3399ff80', '#ff7f7f80', '#ff8c6680', '#ff9a7580', '#ffb3a680', '#f2c2b080'], // translucent

    // Tri-tone (Deep Purple, Lavender, and Mint Green)
    set276: ['#3d0c6c', '#4c0f84', '#5b16a3', '#6a1da8', '#7a28d2', '#9ef7d4', '#b5f7e0', '#cceff2', '#e6f6f0', '#f5fbf9'], // dark
    set277: ['#7a28d2', '#8b39e0', '#9c4ce6', '#b15bff', '#c66aff', '#a0d6c2', '#b5f7e0', '#cceff2', '#e6f6f0', '#f5fbf9'], // light
    set278: ['#4c0f84', '#5b16a3', '#6a1da8', '#7a28d2', '#9ef7d4', '#b5f7e0', '#cceff2', '#e6f6f0', '#f5fbf9', '#ffffff'], // opaque
    set279: ['#b5f7e0', '#cceff2', '#e6f6f0', '#f0f9f9', '#f5fbf9', '#9c4ce6', '#b15bff', '#c66aff', '#7a28d2', '#4c0f84'], // pastel
    set280: ['#4c0f8480', '#5b16a380', '#6a1da880', '#7a28d280', '#9ef7d480', '#b5f7e080', '#cceff280', '#e6f6f080', '#f5fbf980', '#ffffff80'], // translucent

    // Tri-tone (Royal Blue, Tangerine, and Light Green)
    set281: ['#00274d', '#003366', '#004080', '#0056b3', '#0073e6', '#ff6f00', '#ff7f3f', '#ff9933', '#ffb84d', '#ffcc66'], // dark
    set282: ['#0073e6', '#3399ff', '#66b2ff', '#99ccff', '#cce0ff', '#ff9933', '#ffb84d', '#ffcc66', '#ffe5cc', '#fff2e6'], // light
    set283: ['#003366', '#004080', '#0056b3', '#0073e6', '#3399ff', '#ff7f3f', '#ff9933', '#ffb84d', '#ffcc66', '#ffe5cc'], // opaque
    set284: ['#66b2ff', '#99ccff', '#cce0ff', '#e0f2ff', '#f2f9ff', '#ff9933', '#ffb84d', '#ffcc66', '#ffe5cc', '#fff2e6'], // pastel
    set285: ['#00336680', '#00408080', '#0056b380', '#0073e680', '#3399ff80', '#ff7f3f80', '#ff993380', '#ffb84d80', '#ffcc6680', '#ffe5cc80'], // translucent

    // Tri-tone (Teal, Peach, and Light Slate)
    set286: ['#004d40', '#00796b', '#009688', '#26a69a', '#4db6ac', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#e64a19'], // dark
    set287: ['#009688', '#26a69a', '#4db6ac', '#80cbc4', '#b2dfdb', '#ff8a65', '#ff7043', '#ff5722', '#fbe9e7', '#fdfdfd'], // light
    set288: ['#00796b', '#009688', '#26a69a', '#4db6ac', '#80cbc4', '#ff7043', '#ff5722', '#e64a19', '#fbe9e7', '#fdfdfd'], // opaque
    set289: ['#4db6ac', '#80cbc4', '#b2dfdb', '#d0f0f0', '#e6f9f9', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#fbe9e7'], // pastel
    set290: ['#00796b80', '#00968880', '#26a69a80', '#4db6ac80', '#80cbc480', '#ff704380', '#ff572280', '#e64a1980', '#fbe9e780', '#fdfdfd80'], // translucent

    // Tri-tone (Crimson Red, Slate Gray, and Mint Green)
    set291: ['#4d0000', '#660000', '#800000', '#990000', '#b30000', '#2e2e2e', '#4d4d4d', '#666666', '#8c8c8c', '#b3b3b3'], // dark
    set292: ['#b30000', '#cc0000', '#e60000', '#ff4d4d', '#ff9999', '#8c8c8c', '#b3b3b3', '#d0d0d0', '#e6e6e6', '#f2f2f2'], // light
    set293: ['#800000', '#990000', '#b30000', '#cc0000', '#e60000', '#666666', '#8c8c8c', '#b3b3b3', '#d0d0d0', '#f2f2f2'], // opaque
    set294: ['#ff4d4d', '#ff9999', '#ffb3b3', '#f2d9d9', '#f9e6e6', '#8c8c8c', '#b3b3b3', '#d0d0d0', '#e6e6e6', '#f2f2f2'], // pastel
    set295: ['#80000080', '#99000080', '#b3000080', '#cc000080', '#e6000080', '#66666680', '#8c8c8c80', '#b3b3b380', '#d0d0d080', '#f2f2f280'], // translucent

    // Tri-tone (Charcoal, Maroon, and Light Yellow)
    set296: ['#2e2e2e', '#3d3d3d', '#4d4d4d', '#5c5c5c', '#6b6b6b', '#5c0000', '#6b0d0d', '#7a1a1a', '#8a2929', '#9b3b3b'], // dark
    set297: ['#5c5c5c', '#6b6b6b', '#7a7a7a', '#8a8a8a', '#9b9b9b', '#f7e4b1', '#f9e5b9', '#fbe7c2', '#fdf0d0', '#fef4d8'], // light
    set298: ['#3d3d3d', '#4d4d4d', '#5c5c5c', '#6b6b6b', '#7a7a7a', '#6b0d0d', '#7a1a1a', '#8a2929', '#9b3b3b', '#f7e4b1'], // opaque
    set299: ['#7a7a7a', '#8a8a8a', '#9b9b9b', '#cfcfcf', '#dcdcdc', '#f7e4b1', '#f9e5b9', '#fbe7c2', '#fdf0d0', '#fef4d8'], // pastel
    set300: ['#3d3d3d80', '#4d4d4d80', '#5c5c5c80', '#6b6b6b80', '#7a7a7a80', '#6b0d0d80', '#7a1a1a80', '#8a292980', '#9b3b3b80', '#f7e4b180'], // translucent

    // Tri-tone (Dark Cyan, Coral, and Light Lavender)
    set301: ['#003d40', '#004d50', '#005f5f', '#007979', '#009696', '#ff6f61', '#ff8c66', '#ff9a75', '#ffb3a6', '#f4b6c2'], // dark
    set302: ['#007979', '#009696', '#00b2b2', '#33cccc', '#66e0e0', '#ff9a75', '#ffb3a6', '#f4b6c2', '#f9e4e1', '#fdfdfd'], // light
    set303: ['#004d50', '#005f5f', '#007979', '#009696', '#00b2b2', '#ff8c66', '#ff9a75', '#ffb3a6', '#f4b6c2', '#f9e4e1'], // opaque
    set304: ['#00b2b2', '#33cccc', '#66e0e0', '#cce0e0', '#e0f2f2', '#ff9a75', '#ffb3a6', '#f4b6c2', '#f9e4e1', '#ffffff'], // pastel
    set305: ['#004d5080', '#005f5f80', '#00797980', '#00969680', '#00b2b280', '#ff8c6680', '#ff9a7580', '#ffb3a680', '#f4b6c280', '#f9e4e180'], // translucent

    // Tri-tone (Olive Green, Rust Orange, and Light Beige)
    set306: ['#4a3c2e', '#5a4a3c', '#6a5a4a', '#7a6a5a', '#8a7a6a', '#b74c1f', '#c74d29', '#d75d34', '#e76f4d', '#f08066'], // dark
    set307: ['#8a7a6a', '#9b8d6b', '#b0a18b', '#c4bba2', '#d8d2b6', '#e76f4d', '#f08066', '#f4a77a', '#f7b899', '#f9d6cc'], // light
    set308: ['#5a4a3c', '#6a5a4a', '#7a6a5a', '#8a7a6a', '#9b8d6b', '#c74d29', '#d75d34', '#e76f4d', '#f08066', '#f7b899'], // opaque
    set309: ['#9b8d6b', '#b0a18b', '#c4bba2', '#d8d2b6', '#f0e5d8', '#f4a77a', '#f7b899', '#f9d6cc', '#fbece5', '#ffffff'], // pastel
    set310: ['#5a4a3c80', '#6a5a4a80', '#7a6a5a80', '#8a7a6a80', '#9b8d6b80', '#c74d2980', '#d75d3480', '#e76f4d80', '#f0806680', '#f7b89980'], // translucent

    // Tri-tone (Royal Purple, Gold, and Cream)
    set311: ['#2e003e', '#4d007a', '#6a00b3', '#7f00e6', '#9a4dff', '#ffd700', '#ffcc00', '#ffb84d', '#ffda66', '#fff2cc'], // dark
    set312: ['#7f00e6', '#9a4dff', '#b366ff', '#d1a6ff', '#e6ccff', '#ffb84d', '#ffda66', '#fff2cc', '#f9f3f0', '#ffffff'], // light
    set313: ['#4d007a', '#6a00b3', '#7f00e6', '#9a4dff', '#b366ff', '#ffcc00', '#ffd700', '#ffda66', '#fff2cc', '#f9f3f0'], // opaque
    set314: ['#b366ff', '#d1a6ff', '#e6ccff', '#f2e5ff', '#f9f9ff', '#ffb84d', '#ffda66', '#fff2cc', '#f9f3f0', '#ffffff'], // pastel
    set315: ['#4d007a80', '#6a00b380', '#7f00e680', '#9a4dff80', '#b366ff80', '#ffcc0080', '#ffd70080', '#ffda6680', '#fff2cc80', '#f9f3f080'], // translucent

    // Tri-tone (Deep Green, Burnt Orange, and Light Grey)
    set316: ['#003d00', '#004d00', '#006600', '#007700', '#009900', '#b34d00', '#cc6600', '#e67300', '#ff7f00', '#ff9900'], // dark
    set317: ['#009900', '#00b33c', '#00cc66', '#66ff99', '#99ffcc', '#e67300', '#ff7f00', '#ff9900', '#f2e5d5', '#ffffff'], // light
    set318: ['#004d00', '#006600', '#007700', '#009900', '#00b33c', '#cc6600', '#e67300', '#ff7f00', '#ff9900', '#f2e5d5'], // opaque
    set319: ['#66ff99', '#99ffcc', '#b3ffb3', '#d9ffd9', '#e6ffe6', '#e67300', '#ff7f00', '#ff9900', '#f2e5d5', '#ffffff'], // pastel
    set320: ['#004d0080', '#00660080', '#00770080', '#00990080', '#00b33c80', '#cc660080', '#e6730080', '#ff7f0080', '#ff990080', '#f2e5d580'], // translucent

    // Tri-tone (Dark Brown, Olive Green, and Sky Blue)
    set321: ['#3d2b1f', '#4d3b2f', '#5d4b3f', '#6d5b4f', '#7d6b5f', '#1f8a70', '#2fa57d', '#4fd0a8', '#7ff4d9', '#aafff2'], // dark
    set322: ['#7d6b5f', '#8a7d6b', '#a0b79d', '#c1d5b0', '#d9e4c5', '#4fd0a8', '#7ff4d9', '#aafff2', '#e6f9f9', '#f2fdfd'], // light
    set323: ['#4d3b2f', '#5d4b3f', '#6d5b4f', '#7d6b5f', '#8a7d6b', '#2fa57d', '#4fd0a8', '#7ff4d9', '#aafff2', '#e6f9f9'], // opaque
    set324: ['#a0b79d', '#c1d5b0', '#d9e4c5', '#f0f5e8', '#f5f9f0', '#4fd0a8', '#7ff4d9', '#aafff2', '#e6f9f9', '#f2fdfd'], // pastel
    set325: ['#4d3b2f80', '#5d4b3f80', '#6d5b4f80', '#7d6b5f80', '#8a7d6b80', '#2fa57d80', '#4fd0a880', '#7ff4d980', '#aafff280', '#f2fdfd80'], // translucent

    // Tri-tone (Teal, Coral, and Light Sand)
    set326  : ['#003d34', '#004d40', '#00695c', '#009688', '#26a69a', '#ff6f61', '#ff8a65', '#ff9e80', '#ffbfa3', '#f5e1e0'], // dark
    set327: ['#009688', '#26a69a', '#4db6ac', '#80cbc4', '#b2dfdb', '#ff9e80', '#ffbfa3', '#f5e1e0', '#fdf7f4', '#ffffff'], // light
    set328: ['#004d40', '#00695c', '#009688', '#26a69a', '#4db6ac', '#ff8a65', '#ff9e80', '#ffbfa3', '#f5e1e0', '#fdf7f4'], // opaque
    set329: ['#4db6ac', '#80cbc4', '#b2dfdb', '#d0f2f2', '#e5f5f5', '#ff9e80', '#ffbfa3', '#f5e1e0', '#fdf7f4', '#ffffff'], // pastel
    set330: ['#004d4080', '#00695c80', '#00968880', '#26a69a80', '#4db6ac80', '#ff8a6580', '#ff9e8080', '#ffbfa380', '#f5e1e080', '#fdf7f480'], // translucent

    // Tri-tone (Slate Blue, Light Green, and Beige)
    set331: ['#2b2d7f', '#3b4cc0', '#4d5fcf', '#6b7eff', '#8a9fff', '#4caf50', '#66bb6a', '#81c784', '#a5d6a7', '#c8e6c9'], // dark
    set332: ['#6b7eff', '#8a9fff', '#a2b9ff', '#c2d3ff', '#d4e1ff', '#81c784', '#a5d6a7', '#c8e6c9', '#eafaf4', '#f5f9f0'], // light
    set333: ['#3b4cc0', '#4d5fcf', '#6b7eff', '#8a9fff', '#a2b9ff', '#66bb6a', '#81c784', '#a5d6a7', '#c8e6c9', '#eafaf4'], // opaque
    set334: ['#a2b9ff', '#c2d3ff', '#d4e1ff', '#f0f5ff', '#f7f9ff', '#81c784', '#a5d6a7', '#c8e6c9', '#eafaf4', '#f5f9f0'], // pastel
    set335: ['#3b4cc080', '#4d5fcf80', '#6b7eff80', '#8a9fff80', '#a2b9ff80', '#66bb6a80', '#81c78480', '#a5d6a780', '#c8e6c980', '#eafaf480'], // translucent

    // Tri-tone (Burgundy, Olive, and Light Peach)
    set336: ['#4c0d0f', '#660000', '#8b0000', '#b30000', '#d32f2f', '#4f6d40', '#6b8e23', '#8d9c0d', '#a2b93f', '#b4d8b2'], // dark
    set337: ['#b30000', '#d32f2f', '#e57373', '#f1a1a1', '#f8c2c2', '#8d9c0d', '#a2b93f', '#b4d8b2', '#dce8dc', '#f2f9f2'], // light
    set338: ['#660000', '#8b0000', '#b30000', '#d32f2f', '#e57373', '#4f6d40', '#6b8e23', '#a2b93f', '#b4d8b2', '#dce8dc'], // opaque
    set339: ['#e57373', '#f1a1a1', '#f8c2c2', '#f1e5e5', '#f9f9f9', '#8d9c0d', '#a2b93f', '#b4d8b2', '#dce8dc', '#f2f9f2'], // pastel
    set340: ['#66000080', '#8b000080', '#b3000080', '#d32f2f80', '#e5737380', '#4f6d4080', '#6b8e2380', '#a2b93f80', '#b4d8b280', '#dce8dc80'], // translucent

    // Tri-tone (Royal Blue, Bright Pink, and Soft Gray)
    set341: ['#0033cc', '#0049e6', '#0066ff', '#3385ff', '#66a3ff', '#d63f7e', '#f55d8e', '#fc7f9a', '#fcb1b4', '#fef5f5'], // dark
    set342: ['#0066ff', '#3385ff', '#66a3ff', '#99c2ff', '#c2d9ff', '#fc7f9a', '#fcb1b4', '#fef5f5', '#f9f9f9', '#ffffff'], // light
    set343: ['#0049e6', '#0066ff', '#3385ff', '#66a3ff', '#99c2ff', '#f55d8e', '#fc7f9a', '#fcb1b4', '#fef5f5', '#f9f9f9'], // opaque
    set344: ['#66a3ff', '#99c2ff', '#c2d9ff', '#e0ebff', '#f0f5ff', '#fc7f9a', '#fcb1b4', '#fef5f5', '#f9f9f9', '#ffffff'], // pastel
    set345: ['#0033cc80', '#0049e680', '#0066ff80', '#3385ff80', '#66a3ff80', '#d63f7e80', '#f55d8e80', '#fc7f9a80', '#fcb1b480', '#fef5f580'], // translucent

    // Tri-tone (Dark Gray, Warm Red, and Light Mint)
    set346: ['#1c1c1c', '#2c2c2c', '#3d3d3d', '#4d4d4d', '#6b6b6b', '#b7410e', '#d84b1e', '#f05a30', '#f37f5a', '#f7a37b'], // dark
    set347: ['#4d4d4d', '#6b6b6b', '#8c8c8c', '#a3a3a3', '#c0c0c0', '#f05a30', '#f37f5a', '#f7a37b', '#fcd1c4', '#fdf6f2'], // light
    set348: ['#2c2c2c', '#3d3d3d', '#4d4d4d', '#6b6b6b', '#8c8c8c', '#d84b1e', '#f05a30', '#f37f5a', '#f7a37b', '#fcd1c4'], // opaque
    set349: ['#8c8c8c', '#a3a3a3', '#c0c0c0', '#e0e0e0', '#f5f5f5', '#f05a30', '#f37f5a', '#f7a37b', '#fcd1c4', '#fdf6f2'], // pastel
    set350: ['#1c1c1c80', '#2c2c2c80', '#3d3d3d80', '#4d4d4d80', '#6b6b6b80', '#b7410e80', '#d84b1e80', '#f05a3080', '#f37f5a80', '#f7a37b80'], // translucent

    // Four-tone (Deep Blue, Gold, Light Gray, and White)
    set351: ['#00274d', '#003b6f', '#00509e', '#0066cc', '#0080ff', '#ffb84d', '#ffcc66', '#ffda80', '#f2e5d5', '#ffffff'], // dark
    set352: ['#0066cc', '#0080ff', '#66a3ff', '#99c2ff', '#c2d9ff', '#ffda80', '#f2e5d5', '#ffffff', '#f9f9f9', '#f5f5f5'], // light
    set353: ['#003b6f', '#00509e', '#0066cc', '#0080ff', '#66a3ff', '#ffcc66', '#ffda80', '#f2e5d5', '#ffffff', '#f9f9f9'], // opaque
    set354: ['#66a3ff', '#99c2ff', '#c2d9ff', '#dfefff', '#f5faff', '#ffcc66', '#ffda80', '#f2e5d5', '#ffffff', '#f9f9f9'], // pastel
    set355: ['#003b6f80', '#00509e80', '#0066cc80', '#0080ff80', '#66a3ff80', '#ffcc6680', '#ffda8080', '#f2e5d580', '#ffffff80', '#f9f9f980'], // translucent

    // Four-tone (Dark Green, Burnt Orange, Tan, and Light Blue)
    set356: ['#003d00', '#004d00', '#005c00', '#007300', '#008000', '#e64a19', '#f57c00', '#ff9800', '#ffc107', '#ffeb3b'], // dark
    set357: ['#007300', '#008000', '#4caf50', '#80e27e', '#a5d6a7', '#ff9800', '#ffc107', '#ffeb3b', '#fafafa', '#ffffff'], // light
    set358: ['#004d00', '#005c00', '#007300', '#008000', '#4caf50', '#f57c00', '#ff9800', '#ffc107', '#ffeb3b', '#fafafa'], // opaque
    set359: ['#4caf50', '#80e27e', '#a5d6a7', '#d0f5e0', '#e5f9e8', '#f57c00', '#ff9800', '#ffc107', '#ffeb3b', '#fafafa'], // pastel
    set360: ['#004d0080', '#005c0080', '#00730080', '#00800080', '#4caf5080', '#f57c0080', '#ff980080', '#ffc10780', '#ffeb3b80', '#fafafa80'], // translucent

    // Four-tone (Deep Purple, Bright Yellow, Light Gray, and Black)
    set361: ['#2e003e', '#3d0060', '#5e0099', '#7c33ff', '#a066ff', '#f7b500', '#f8c200', '#f8d663', '#f9e5a6', '#fdf4e6'], // dark
    set362: ['#7c33ff', '#a066ff', '#c4a6ff', '#d8b3ff', '#e8d0ff', '#f8c200', '#f8d663', '#f9e5a6', '#fdf4e6', '#ffffff'], // light
    set363: ['#3d0060', '#5e0099', '#7c33ff', '#a066ff', '#c4a6ff', '#f8c200', '#f8d663', '#f9e5a6', '#fdf4e6', '#ffffff'], // opaque
    set364: ['#c4a6ff', '#d8b3ff', '#e8d0ff', '#f0e5ff', '#f5f8ff', '#f8c200', '#f8d663', '#f9e5a6', '#fdf4e6', '#ffffff'], // pastel
    set365: ['#3d006080', '#5e009980', '#7c33ff80', '#a066ff80', '#c4a6ff80', '#f8c20080', '#f8d66380', '#f9e5a680', '#fdf4e680', '#ffffff80'], // translucent

    // Four-tone (Charcoal Gray, Electric Blue, Silver, and Mint Green)
    set366: ['#2e2e2e', '#4a4a4a', '#6c6c6c', '#8f8f8f', '#b0b0b0', '#0f4c8a', '#0066cc', '#3399ff', '#66b3ff', '#99ccff'], // dark
    set367: ['#0066cc', '#3399ff', '#66b3ff', '#99ccff', '#c2e0ff', '#b0b0b0', '#8f8f8f', '#6c6c6c', '#4a4a4a', '#2e2e2e'], // light
    set368: ['#4a4a4a', '#6c6c6c', '#8f8f8f', '#b0b0b0', '#c2e0ff', '#0f4c8a', '#0066cc', '#3399ff', '#66b3ff', '#99ccff'], // opaque
    set369: ['#66b3ff', '#99ccff', '#c2e0ff', '#e0f0ff', '#f5faff', '#0f4c8a', '#0066cc', '#3399ff', '#66b3ff', '#99ccff'], // pastel
    set370: ['#2e2e2e80', '#4a4a4a80', '#6c6c6c80', '#8f8f8f80', '#b0b0b080', '#0f4c8a80', '#0066cc80', '#3399ff80', '#66b3ff80', '#99ccff80'], // translucent

    // Four-tone (Midnight Blue, Sunset Orange, Light Gray, and Ivory)
    set371: ['#00274d', '#003d6e', '#00509e', '#0066cc', '#0080ff', '#ff5722', '#ff6f40', '#ff8a54', '#ffb07d', '#ffdcc4'], // dark
    set372: ['#0066cc', '#0080ff', '#66a3ff', '#99c2ff', '#c2d9ff', '#ff8a54', '#ffb07d', '#ffdcc4', '#f2f2f2', '#ffffff'], // light
    set373: ['#003d6e', '#00509e', '#0066cc', '#0080ff', '#66a3ff', '#ff6f40', '#ff8a54', '#ffb07d', '#ffdcc4', '#f2f2f2'], // opaque
    set374: ['#66a3ff', '#99c2ff', '#c2d9ff', '#e0ebff', '#f2f7ff', '#ff6f40', '#ff8a54', '#ffb07d', '#ffdcc4', '#f2f2f2'], // pastel
    set375: ['#003d6e80', '#00509e80', '#0066cc80', '#0080ff80', '#66a3ff80', '#ff6f4080', '#ff8a5480', '#ffb07d80', '#ffdcc480', '#f2f2f280'], // translucent

    // Four-tone (Forest Green, Rustic Red, Light Beige, and Sky Blue)
    set376: ['#0d3d0d', '#1a5e1a', '#2a7b2a', '#39a639', '#66c466', '#a04444', '#b84c4c', '#d45353', '#f08080', '#f2b6b6'], // dark
    set377: ['#39a639', '#66c466', '#9cd9a8', '#bce0b2', '#d6e6c5', '#d45353', '#f08080', '#f2b6b6', '#f9f9f9', '#ffffff'], // light
    set378: ['#1a5e1a', '#2a7b2a', '#39a639', '#66c466', '#9cd9a8', '#b84c4c', '#d45353', '#f08080', '#f2b6b6', '#f9f9f9'], // opaque
    set379: ['#9cd9a8', '#bce0b2', '#d6e6c5', '#e0f0d6', '#eaf7e6', '#d45353', '#f08080', '#f2b6b6', '#f9f9f9', '#ffffff'], // pastel
    set380: ['#1a5e1a80', '#2a7b2a80', '#39a63980', '#66c46680', '#9cd9a880', '#b84c4c80', '#d4535380', '#f0808080', '#f2b6b680', '#f9f9f980'], // translucent

    // Four-tone (Steel Gray, Ruby Red, Cream, and Mint Green)
    set381: ['#1e2a2f', '#2c3e50', '#34495e', '#5d6d7e', '#8e9baf', '#c8102e', '#d83f57', '#ea5c5a', '#f8978a', '#fbd6d6'], // dark
    set382: ['#5d6d7e', '#8e9baf', '#a9b4c2', '#c8d0d9', '#e2e9ee', '#ea5c5a', '#f8978a', '#fbd6d6', '#f9f9f9', '#ffffff'], // light
    set383: ['#2c3e50', '#34495e', '#5d6d7e', '#8e9baf', '#a9b4c2', '#d83f57', '#ea5c5a', '#f8978a', '#fbd6d6', '#f9f9f9'], // opaque
    set384: ['#a9b4c2', '#c8d0d9', '#e2e9ee', '#f0f4f8', '#f5f7f9', '#d83f57', '#ea5c5a', '#f8978a', '#fbd6d6', '#f9f9f9'], // pastel
    set385: ['#2c3e5080', '#34495e80', '#5d6d7e80', '#8e9baf80', '#a9b4c280', '#d83f5780', '#ea5c5a80', '#f8978a80', '#fbd6d680', '#f9f9f980'], // translucent

    // Four-tone (Rich Maroon, Deep Teal, Light Taupe, and Soft Rose)
    set386: ['#400b3f', '#5c0a5a', '#a32f4c', '#d45a6b', '#e88a9d', '#005a5b', '#007a7a', '#009898', '#00bfbf', '#00d6d6'], // dark
    set387: ['#a32f4c', '#d45a6b', '#e88a9d', '#f2b1b8', '#f7d0d4', '#005a5b', '#007a7a', '#009898', '#00bfbf', '#00d6d6'], // light
    set388: ['#5c0a5a', '#a32f4c', '#d45a6b', '#e88a9d', '#f2b1b8', '#007a7a', '#009898', '#00bfbf', '#00d6d6', '#f7d0d4'], // opaque
    set389: ['#e88a9d', '#f2b1b8', '#f7d0d4', '#f9e5e7', '#fdf8f9', '#007a7a', '#009898', '#00bfbf', '#00d6d6', '#f7d0d4'], // pastel
    set390: ['#5c0a5a80', '#a32f4c80', '#d45a6b80', '#e88a9d80', '#f2b1b880', '#007a7a80', '#00989880', '#00bfbf80', '#00d6d680', '#f7d0d480'], // translucent

    // Four-tone (Warm Beige, Olive Green, Bright Coral, and Light Slate)
    set391: ['#f5f5dc', '#d3d3c5', '#b5b5a1', '#9c9c7b', '#8a8a63', '#f46a4c', '#f57f6c', '#f58d72', '#f9a19c', '#f9c5c5'], // dark
    set392: ['#f5f5dc', '#d3d3c5', '#b5b5a1', '#9c9c7b', '#8a8a63', '#f57f6c', '#f58d72', '#f9a19c', '#f9c5c5', '#ffffff'], // light
    set393: ['#d3d3c5', '#b5b5a1', '#9c9c7b', '#8a8a63', '#f57f6c', '#f58d72', '#f9a19c', '#f9c5c5', '#f5f5dc', '#ffffff'], // opaque
    set394: ['#f57f6c', '#f58d72', '#f9a19c', '#f9c5c5', '#fdf2f2', '#f5f5dc', '#d3d3c5', '#b5b5a1', '#9c9c7b', '#8a8a63'], // pastel
    set395: ['#f5f5dc80', '#d3d3c580', '#b5b5a180', '#9c9c7b80', '#8a8a6380', '#f57f6c80', '#f58d7280', '#f9a19c80', '#f9c5c580', '#ffffff80'], // translucent

    // Four-tone (Midnight Blue, Hot Pink, Light Peach, and Cool Gray)
    set396: ['#00274d', '#003d6e', '#00509e', '#0066cc', '#0080ff', '#ff007f', '#ff3385', '#ff66b3', '#ff99c2', '#ffccdb'], // dark
    set397: ['#0066cc', '#0080ff', '#66a3ff', '#99c2ff', '#c2d9ff', '#ff66b3', '#ff99cc', '#ffb3d9', '#ffccdb', '#f2f2f2'], // light
    set398: ['#003d6e', '#00509e', '#0066cc', '#0080ff', '#66a3ff', '#ff007f', '#ff3385', '#ff66b3', '#ff99c2', '#ffccdb'], // opaque
    set399: ['#66a3ff', '#99c2ff', '#c2d9ff', '#e0ebff', '#f5faff', '#ff3385', '#ff66b3', '#ff99c2', '#ffccdb', '#f2f2f2'], // pastel
    set400: ['#003d6e80', '#00509e80', '#0066cc80', '#0080ff80', '#66a3ff80', '#ff007f80', '#ff338580', '#ff66b380', '#ff99c280', '#ffccdb80'], // translucent

    // Four-tone (Teal Blue, Rust Orange, Warm Taupe, and Soft Cream)
    set401: ['#003d4d', '#004d6e', '#005d8e', '#007a99', '#0094b7', '#b44c27', '#c05b2f', '#d27d3f', '#e0a15e', '#f2c6a0'], // dark
    set402: ['#007a99', '#0094b7', '#66b2ff', '#99ccff', '#c2e0ff', '#d27d3f', '#e0a15e', '#f2c6a0', '#f7f5f1', '#ffffff'], // light
    set403: ['#004d6e', '#005d8e', '#007a99', '#0094b7', '#66b2ff', '#b44c27', '#c05b2f', '#d27d3f', '#e0a15e', '#f2c6a0'], // opaque
    set404: ['#66b2ff', '#99ccff', '#c2e0ff', '#e0f0ff', '#f2faff', '#d27d3f', '#e0a15e', '#f2c6a0', '#f7f5f1', '#ffffff'], // pastel
    set405: ['#004d6e80', '#005d8e80', '#007a9980', '#0094b780', '#66b2ff80', '#b44c2780', '#c05b2f80', '#d27d3f80', '#e0a15e80', '#f2c6a080'], // translucent

    // Four-tone (Dark Gray, Rose Pink, Pale Peach, and Slate Blue)
    set406: ['#2e2e2e', '#4a4a4a', '#6c6c6c', '#8f8f8f', '#b0b0b0', '#e91e63', '#f06292', '#f48fb1', '#f8bbd0', '#fce4ec'], // dark
    set407: ['#6c6c6c', '#8f8f8f', '#b0b0b0', '#d0d0d0', '#f0f0f0', '#f48fb1', '#f8bbd0', '#fce4ec', '#f9f9f9', '#ffffff'], // light
    set408: ['#4a4a4a', '#6c6c6c', '#8f8f8f', '#b0b0b0', '#d0d0d0', '#e91e63', '#f06292', '#f48fb1', '#f8bbd0', '#fce4ec'], // opaque
    set409: ['#f48fb1', '#f8bbd0', '#fce4ec', '#f8f9fa', '#f5f6f7', '#e91e63', '#f06292', '#f48fb1', '#f8bbd0', '#fce4ec'], // pastel
    set410: ['#4a4a4a80', '#6c6c6c80', '#8f8f8f80', '#b0b0b080', '#d0d0d080', '#e91e6380', '#f0629280', '#f48fb180', '#f8bbd080', '#fce4ec80'], // translucent

    // Four-tone (Deep Plum, Bold Gold, Light Beige, and Forest Green)
    set411: ['#3e0a47', '#5c2a60', '#8a4d7d', '#a66f8b', '#d5a5c2', '#d4af37', '#f3c300', '#f9a600', '#fdbf00', '#fcf6d0'], // dark
    set412: ['#8a4d7d', '#a66f8b', '#d5a5c2', '#f0e2e2', '#f7f3f2', '#d4af37', '#f3c300', '#f9a600', '#fdbf00', '#fcf6d0'], // light
    set413: ['#5c2a60', '#8a4d7d', '#a66f8b', '#d5a5c2', '#f0e2e2', '#f3c300', '#f9a600', '#fdbf00', '#fcf6d0', '#f7f3f2'], // opaque
    set414: ['#a66f8b', '#d5a5c2', '#f0e2e2', '#f7f3f2', '#fcf6d0', '#d4af37', '#f3c300', '#f9a600', '#fdbf00', '#fcf6d0'], // pastel
    set415: ['#5c2a6080', '#8a4d7d80', '#a66f8b80', '#d5a5c280', '#f0e2e280', '#d4af3780', '#f3c30080', '#f9a60080', '#fdbf0080', '#fcf6d080'], // translucent

    // Four-tone (Earth Brown, Burnt Red, Warm Cream, and Seafoam Green)
    set416: ['#4a3c2e', '#6b4f4f', '#8c6e5e', '#b5977b', '#d2c6b9', '#c0392b', '#e74c3c', '#ec7063', '#f1948a', '#f2b5d4'], // dark
    set417: ['#b5977b', '#d2c6b9', '#f2e5d5', '#f5f7f2', '#fcfafa', '#ec7063', '#f1948a', '#f2b5d4', '#f9f9f9', '#ffffff'], // light
    set418: ['#6b4f4f', '#8c6e5e', '#b5977b', '#d2c6b9', '#f2e5d5', '#c0392b', '#e74c3c', '#ec7063', '#f1948a', '#f2b5d4'], // opaque
    set419: ['#8c6e5e', '#b5977b', '#d2c6b9', '#f2e5d5', '#f5f7f2', '#c0392b', '#e74c3c', '#ec7063', '#f1948a', '#f2b5d4'], // pastel
    set420: ['#6b4f4f80', '#8c6e5e80', '#b5977b80', '#d2c6b980', '#f2e5d580', '#c0392b80', '#e74c3c80', '#ec706380', '#f1948a80', '#f2b5d480'], // translucent

    // Four-tone (Azure Blue, Coral Red, Light Beige, and Charcoal Gray)
    set421: ['#00274d', '#003d6e', '#00509e', '#0066cc', '#0080ff', '#ff5733', '#ff6f61', '#f78c6c', '#fbb1b1', '#fdd6d6'], // dark
    set422: ['#0066cc', '#0080ff', '#66a3ff', '#99c2ff', '#c2d9ff', '#f78c6c', '#fbb1b1', '#fdd6d6', '#f9f9f9', '#ffffff'], // light
    set423: ['#003d6e', '#00509e', '#0066cc', '#0080ff', '#66a3ff', '#ff5733', '#ff6f61', '#f78c6c', '#fbb1b1', '#fdd6d6'], // opaque
    set424: ['#66a3ff', '#99c2ff', '#c2d9ff', '#d0e6ff', '#e0f0ff', '#f78c6c', '#fbb1b1', '#fdd6d6', '#f9f9f9', '#ffffff'], // pastel
    set425: ['#003d6e80', '#00509e80', '#0066cc80', '#0080ff80', '#66a3ff80', '#ff573380', '#ff6f6180', '#f78c6c80', '#fbb1b180', '#fdd6d680'], // translucent

    // Four-tone (Soft Green, Rich Red, Warm Tan, and Light Gray)
    set426: ['#2e8b57', '#3d9e68', '#5dbb89', '#8fd9a8', '#c9e3d7', '#e91e63', '#f06292', '#f48fb1', '#f8bbd0', '#fce4ec'], // dark
    set427: ['#5dbb89', '#8fd9a8', '#c9e3d7', '#eaf6f1', '#f8f9f9', '#f48fb1', '#f8bbd0', '#fce4ec', '#f9f9f9', '#ffffff'], // light
    set428: ['#3d9e68', '#5dbb89', '#8fd9a8', '#c9e3d7', '#eaf6f1', '#e91e63', '#f06292', '#f48fb1', '#f8bbd0', '#fce4ec'], // opaque
    set429: ['#8fd9a8', '#c9e3d7', '#eaf6f1', '#f0f4f8', '#f5f7f9', '#e91e63', '#f06292', '#f48fb1', '#f8bbd0', '#fce4ec'], // pastel
    set430: ['#3d9e6880', '#5dbb8980', '#8fd9a880', '#c9e3d780', '#eaf6f180', '#e91e6380', '#f0629280', '#f48fb180', '#f8bbd080', '#fce4ec80'], // translucent

    // Four-tone (Slate Blue, Burnt Sienna, Soft Peach, and Warm Gray)
    set431: ['#4a4a7c', '#6a5acd', '#9b8dc1', '#c5b1d1', '#d6d5ea', '#d74e56', '#e06f6b', '#f19a8d', '#f4b2a1', '#f6d0c8'], // dark
    set432: ['#9b8dc1', '#c5b1d1', '#d6d5ea', '#f0f0f5', '#f9f9fc', '#d74e56', '#e06f6b', '#f19a8d', '#f4b2a1', '#f6d0c8'], // light
    set433: ['#6a5acd', '#9b8dc1', '#c5b1d1', '#d6d5ea', '#f0f0f5', '#d74e56', '#e06f6b', '#f19a8d', '#f4b2a1', '#f6d0c8'], // opaque
    set434: ['#9b8dc1', '#c5b1d1', '#d6d5ea', '#f0f0f5', '#f9f9fc', '#d74e56', '#e06f6b', '#f19a8d', '#f4b2a1', '#f6d0c8'], // pastel
    set435: ['#6a5acd80', '#9b8dc180', '#c5b1d180', '#d6d5ea80', '#f0f0f580', '#d74e5680', '#e06f6b80', '#f19a8d80', '#f4b2a180', '#f6d0c880'], // translucent

    // Four-tone (Royal Blue, Golden Yellow, Light Gray, and Deep Red)
    set436: ['#002d72', '#0044b4', '#0066ff', '#3399ff', '#66b3ff', '#cc6600', '#ff6f00', '#ff8c1a', '#f5b57a', '#fbe0c2'], // dark
    set437: ['#0066ff', '#3399ff', '#66b3ff', '#99ccff', '#c2d9ff', '#ff8c1a', '#f5b57a', '#fbe0c2', '#f9f9f9', '#ffffff'], // light
    set438: ['#0044b4', '#0066ff', '#3399ff', '#66b3ff', '#99ccff', '#cc6600', '#ff6f00', '#ff8c1a', '#f5b57a', '#fbe0c2'], // opaque
    set439: ['#3399ff', '#66b3ff', '#99ccff', '#c2d9ff', '#e0e6f4', '#ff8c1a', '#f5b57a', '#fbe0c2', '#f9f9f9', '#ffffff'], // pastel
    set440: ['#002d7280', '#0044b480', '#0066ff80', '#3399ff80', '#66b3ff80', '#cc660080', '#ff6f0080', '#ff8c1a80', '#f5b57a80', '#fbe0c280'], // translucent

    // Four-tone (Teal, Coral, Cream, and Charcoal)
    set441: ['#004d40', '#00796b', '#009688', '#26a69a', '#4db6ac', '#c84c4c', '#e57373', '#f44336', '#f8bbd0', '#fbe9e7'], // dark
    set442: ['#009688', '#26a69a', '#4db6ac', '#80cbc4', '#b2dfdb', '#f44336', '#f8bbd0', '#fbe9e7', '#f9f9f9', '#ffffff'], // light
    set443: ['#00796b', '#009688', '#26a69a', '#4db6ac', '#80cbc4', '#c84c4c', '#e57373', '#f44336', '#f8bbd0', '#fbe9e7'], // opaque
    set444: ['#26a69a', '#4db6ac', '#80cbc4', '#b2dfdb', '#d0f0f0', '#c84c4c', '#e57373', '#f44336', '#f8bbd0', '#fbe9e7'], // pastel
    set445: ['#004d4080', '#00796b80', '#00968880', '#26a69a80', '#4db6ac80', '#c84c4c80', '#e5737380', '#f4433680', '#f8bbd080', '#fbe9e780'], // translucent

    // Four-tone (Midnight Blue, Light Green, Lavender, and Warm Gold)
    set446: ['#001f3f', '#003366', '#004080', '#00509e', '#0066cc', '#4caf50', '#66bb6a', '#81c784', '#a5d6a7', '#d0f4c1'], // dark
    set447: ['#004080', '#00509e', '#0066cc', '#3399ff', '#66b3ff', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#d0f4c1'], // light
    set448: ['#003366', '#004080', '#00509e', '#0066cc', '#3399ff', '#4caf50', '#66bb6a', '#81c784', '#a5d6a7', '#d0f4c1'], // opaque
    set449: ['#00509e', '#0066cc', '#3399ff', '#66b3ff', '#d0f4c1', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#f0f0f0'], // pastel
    set450: ['#001f3f80', '#00336680', '#00408080', '#00509e80', '#0066cc80', '#4caf5080', '#66bb6a80', '#81c78480', '#a5d6a780', '#d0f4c180'], // translucent

    // Four-tone (Emerald Green, Sunset Orange, Sky Blue, Warm Yellow)
    set451: ['#004d40', '#00796b', '#009688', '#26a69a', '#4db6ac', '#ff5722', '#ff7043', '#ff8a65', '#ffab91', '#ffccbc'], // dark
    set452: ['#00796b', '#009688', '#26a69a', '#4db6ac', '#80cbc4', '#ff7043', '#ff8a65', '#ffab91', '#ffccbc', '#ffe0b2'], // light
    set453: ['#009688', '#26a69a', '#4db6ac', '#80cbc4', '#b2dfdb', '#ff8a65', '#ffab91', '#ffccbc', '#ffe0b2', '#ffecb3'], // opaque
    set454: ['#4db6ac', '#80cbc4', '#b2dfdb', '#d9eae5', '#e5f5f0', '#ffab91', '#ffccbc', '#ffe0b2', '#ffecb3', '#fff5e6'], // pastel
    set455: ['#004d4080', '#00796b80', '#00968880', '#26a69a80', '#4db6ac80', '#ff572280', '#ff704380', '#ff8a6580', '#ffab9180', '#ffccb880'], // translucent

    // Four-tone (Deep Purple, Ruby Red, Pale Pink, Midnight Blue)
    set456: ['#512da8', '#673ab7', '#7e57c2', '#9575cd', '#b39ddb', '#d32f2f', '#e53935', '#f44336', '#ef5350', '#e57373'], // dark
    set457: ['#673ab7', '#7e57c2', '#9575cd', '#b39ddb', '#d1c4e9', '#e53935', '#f44336', '#ef5350', '#e57373', '#ffebee'], // light
    set458: ['#7e57c2', '#9575cd', '#b39ddb', '#d1c4e9', '#e8eaf6', '#f44336', '#ef5350', '#e57373', '#ffcdd2', '#ffebee'], // opaque
    set459: ['#b39ddb', '#d1c4e9', '#e8eaf6', '#f3eaff', '#faf0ff', '#f44336', '#e57373', '#ffcdd2', '#ffebee', '#ffe6e6'], // pastel
    set460: ['#512da880', '#673ab780', '#7e57c280', '#9575cd80', '#b39ddb80', '#d32f2f80', '#e5393580', '#f4433680', '#ef535080', '#e5737380'], // translucent

    // Four-tone (Forest Green, Maroon, Cool Gray, Sunshine Yellow)
    set461: ['#004d00', '#006600', '#008000', '#009933', '#00b366', '#800000', '#990000', '#b30000', '#cc0000', '#e60000'], // dark
    set462: ['#006600', '#008000', '#009933', '#00b366', '#00cc80', '#990000', '#b30000', '#cc0000', '#e60000', '#ff0000'], // light
    set463: ['#008000', '#009933', '#00b366', '#00cc80', '#00e699', '#b30000', '#cc0000', '#e60000', '#ff0000', '#ff3333'], // opaque
    set464: ['#00b366', '#00cc80', '#00e699', '#00ffb3', '#66ffcc', '#cc0000', '#e60000', '#ff0000', '#ff3333', '#ffe6e6'], // pastel
    set465: ['#004d0080', '#00660080', '#00800080', '#00993380', '#00b36680', '#80000080', '#99000080', '#b3000080', '#cc000080', '#e6000080'], // translucent

    // Four-tone (Bright Pink, Lime Green, Royal Blue, Tangerine)
    set466: ['#e91e63', '#ec407a', '#f06292', '#f48fb1', '#f8bbd0', '#8bc34a', '#9ccc65', '#aed581', '#c5e1a5', '#dcedc8'], // dark
    set467: ['#ec407a', '#f06292', '#f48fb1', '#f8bbd0', '#fce4ec', '#9ccc65', '#aed581', '#c5e1a5', '#dcedc8', '#f0f4c3'], // light
    set468: ['#f06292', '#f48fb1', '#f8bbd0', '#fce4ec', '#ffebee', '#aed581', '#c5e1a5', '#dcedc8', '#f0f4c3', '#f9fbe7'], // opaque
    set469: ['#f48fb1', '#f8bbd0', '#fce4ec', '#ffebee', '#fff5f5', '#c5e1a5', '#dcedc8', '#f0f4c3', '#f9fbe7', '#fcfceb'], // pastel
    set470: ['#e91e6380', '#ec407a80', '#f0629280', '#f48fb180', '#f8bbd080', '#8bc34a80', '#9ccc6580', '#aed58180', '#c5e1a580', '#dcedc880'], // translucent

    // Four-tone (Ocean Blue, Coral Pink, Lime Green, Slate Gray)
    set471: ['#003366', '#004080', '#0059b3', '#0073e6', '#3399ff', '#ff3366', '#ff4d88', '#ff6699', '#ff80b3', '#ff99cc'], // dark
    set472: ['#004080', '#0059b3', '#0073e6', '#3399ff', '#66b2ff', '#ff4d88', '#ff6699', '#ff80b3', '#ff99cc', '#ffb3e0'], // light
    set473: ['#0059b3', '#0073e6', '#3399ff', '#66b2ff', '#99ccff', '#ff6699', '#ff80b3', '#ff99cc', '#ffb3e0', '#ffccf2'], // opaque
    set474: ['#3399ff', '#66b2ff', '#99ccff', '#cce6ff', '#e6f2ff', '#ff99cc', '#ffb3e0', '#ffccf2', '#ffe6fa', '#fff2fc'], // pastel
    set475: ['#00336680', '#00408080', '#0059b380', '#0073e680', '#3399ff80', '#ff336680', '#ff4d8880', '#ff669980', '#ff80b380', '#ff99cc80'], // translucent

    // Four-tone (Moss Green, Sandstone, Teal, Burnt Orange)
    set476: ['#336633', '#408040', '#4d994d', '#59b359', '#66cc66', '#cc7a00', '#e68a00', '#ff9933', '#ffad33', '#ffbf80'], // dark
    set477: ['#408040', '#4d994d', '#59b359', '#66cc66', '#80e680', '#e68a00', '#ff9933', '#ffad33', '#ffbf80', '#ffd699'], // light
    set478: ['#4d994d', '#59b359', '#66cc66', '#80e680', '#99ff99', '#ff9933', '#ffad33', '#ffbf80', '#ffd699', '#ffe6cc'], // opaque
    set479: ['#66cc66', '#80e680', '#99ff99', '#cce6cc', '#e6ffe6', '#ffad33', '#ffbf80', '#ffd699', '#ffe6cc', '#fff2e6'], // pastel
    set480: ['#33663380', '#40804080', '#4d994d80', '#59b35980', '#66cc6680', '#cc7a0080', '#e68a0080', '#ff993380', '#ffad3380', '#ffbf8080'], // translucent

    // Four-tone (Berry Purple, Crimson, Turquoise, Sunflower Yellow)
    set481: ['#660066', '#800080', '#993399', '#b366b3', '#cc99cc', '#cc0000', '#e60000', '#ff0000', '#ff3333', '#ff6666'], // dark
    set482: ['#800080', '#993399', '#b366b3', '#cc99cc', '#e6cce6', '#e60000', '#ff0000', '#ff3333', '#ff6666', '#ff9999'], // light
    set483: ['#993399', '#b366b3', '#cc99cc', '#e6cce6', '#f2e6f2', '#ff0000', '#ff3333', '#ff6666', '#ff9999', '#ffcccc'], // opaque
    set484: ['#b366b3', '#cc99cc', '#e6cce6', '#f2e6f2', '#fcf5fc', '#ff3333', '#ff6666', '#ff9999', '#ffcccc', '#fff2f2'], // pastel
    set485: ['#66006680', '#80008080', '#99339980', '#b366b380', '#cc99cc80', '#cc000080', '#e6000080', '#ff000080', '#ff333380', '#ff666680'], // translucent

    // Four-tone (Azure Blue, Rose Red, Mint Green, Chocolate Brown)
    set486: ['#003399', '#0044cc', '#0055ff', '#3366ff', '#668cff', '#990033', '#b30040', '#cc004d', '#e60066', '#ff007f'], // dark
    set487: ['#0044cc', '#0055ff', '#3366ff', '#668cff', '#99b3ff', '#b30040', '#cc004d', '#e60066', '#ff007f', '#ff3399'], // light
    set488: ['#0055ff', '#3366ff', '#668cff', '#99b3ff', '#cce0ff', '#cc004d', '#e60066', '#ff007f', '#ff3399', '#ff66b2'], // opaque
    set489: ['#3366ff', '#668cff', '#99b3ff', '#cce0ff', '#e6f0ff', '#e60066', '#ff007f', '#ff3399', '#ff66b2', '#ffb3d9'], // pastel
    set490: ['#00339980', '#0044cc80', '#0055ff80', '#3366ff80', '#668cff80', '#99003380', '#b3004080', '#cc004d80', '#e6006680', '#ff007f80'], // translucent

    // Four-tone (Olive Green, Golden Yellow, Navy Blue, Magenta)
    set491: ['#556b2f', '#6b8e23', '#808000', '#9acd32', '#adff2f', '#ffcc00', '#ffdb4d', '#ffe066', '#ffeb99', '#fff2cc'], // dark
    set492: ['#6b8e23', '#808000', '#9acd32', '#adff2f', '#d4ff7f', '#ffdb4d', '#ffe066', '#ffeb99', '#fff2cc', '#fff9e6'], // light
    set493: ['#808000', '#9acd32', '#adff2f', '#d4ff7f', '#ecffb3', '#ffe066', '#ffeb99', '#fff2cc', '#fff9e6', '#fffdf2'], // opaque
    set494: ['#9acd32', '#adff2f', '#d4ff7f', '#ecffb3', '#f5ffe6', '#ffeb99', '#fff2cc', '#fff9e6', '#fffdf2', '#ffffff'], // pastel
    set495: ['#556b2f80', '#6b8e2380', '#80800080', '#9acd3280', '#adff2f80', '#ffcc0080', '#ffdb4d80', '#ffe06680', '#ffeb9980', '#fff2cc80'], // translucent

    // Four-tone (Teal, Salmon Pink, Olive Drab, Lavender)
    set496: ['#008080', '#009999', '#00b3b3', '#00cccc', '#00e6e6', '#ff6666', '#ff8080', '#ff9999', '#ffb3b3', '#ffcccc'], // dark
    set497: ['#009999', '#00b3b3', '#00cccc', '#00e6e6', '#00ffff', '#ff8080', '#ff9999', '#ffb3b3', '#ffcccc', '#ffe6e6'], // light
    set498: ['#00b3b3', '#00cccc', '#00e6e6', '#00ffff', '#80ffff', '#ff9999', '#ffb3b3', '#ffcccc', '#ffe6e6', '#fff2f2'], // opaque
    set499: ['#00cccc', '#00e6e6', '#00ffff', '#80ffff', '#b3ffff', '#ffb3b3', '#ffcccc', '#ffe6e6', '#fff2f2', '#fff9f9'], // pastel
    set500: ['#00808080', '#00999980', '#00b3b380', '#00cccc80', '#00e6e680', '#ff666680', '#ff808080', '#ff999980', '#ffb3b380', '#ffcccc80'], // translucent
};

let currentPage = 1;
const setsPerPage = 5;
const container = document.getElementById('color-sets');
const paginationContainer = document.getElementById('pagination');

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Color set copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

function displaySets(page) {
    container.innerHTML = '';
    const keys = Object.keys(colorSets);
    const start = (page - 1) * setsPerPage;
    const end = start + setsPerPage;

    keys.slice(start, end).forEach((set, index) => {
        const setTitle = document.createElement('h2');
        const setTitleContainer = document.createElement('div');
        setTitleContainer.classList.add('set-title-container');
        setTitle.innerHTML = `Set ${start + index + 1} <i class="far fa-clone"></i>`;
        setTitleContainer.appendChild(setTitle);

        const testButton = document.createElement('button');
        testButton.id = 'test-it';
        testButton.innerHTML = 'Test It';
        testButton.addEventListener('click', () => {
            const colors = colorSets[set];
            const cssVars = `
:root {
    --primary-color: ${colors[0]};
    --secondary-color: ${colors[1]};
    --tertiary-color: ${colors[2]};
    --quaternary-color: ${colors[3]};
    --quinary-color: ${colors[4]};
    --senary-color: ${colors[5]};
    --septenary-color: ${colors[6]};
    --octonary-color: ${colors[7]};
    --nonary-color: ${colors[8]};
    --denary-color: ${colors[9]};
}`;
            copyToClipboard(cssVars);
            window.location.href = 'https://1999azzar.github.io/color-scheme-tester/';
        });
        setTitle.addEventListener('click', () => {
            const colors = colorSets[set];
            const cssVars = `
:root {
    --primary-color: ${colors[0]};
    --secondary-color: ${colors[1]};
    --tertiary-color: ${colors[2]};
    --quaternary-color: ${colors[3]};
    --quinary-color: ${colors[4]};
    --senary-color: ${colors[5]};
    --septenary-color: ${colors[6]};
    --octonary-color: ${colors[7]};
    --nonary-color: ${colors[8]};
    --denary-color: ${colors[9]};
}`;
            copyToClipboard(cssVars);
        });
        setTitleContainer.appendChild(testButton);
        container.appendChild(setTitleContainer);

        const setContainer = document.createElement('div');
        setContainer.classList.add('color-set');
        container.appendChild(setContainer);

        colorSets[set].forEach(color => {
            const colorBox = document.createElement('div');
            colorBox.classList.add('color-box');
            colorBox.style.backgroundColor = color;
            colorBox.textContent = color;
            setContainer.appendChild(colorBox);
        });
    });

    displayPagination(keys.length, page);
}


function displayPagination(totalSets, page) {
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(totalSets / setsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerHTML = `<i class="far fa-file-lines"></i>⠀${i}`;
        if (i === page) {
            button.style.backgroundColor = '#555';
        }
        button.addEventListener('click', () => {
            currentPage = i;
            displaySets(currentPage);
        });
        paginationContainer.appendChild(button);
    }
}


displaySets(currentPage);
