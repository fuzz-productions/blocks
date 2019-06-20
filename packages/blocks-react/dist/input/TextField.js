"use strict";var _extends=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e};function _objectWithoutProperties(e,a){var l={};for(var t in e)0<=a.indexOf(t)||Object.prototype.hasOwnProperty.call(e,t)&&(l[t]=e[t]);return l}var React=require("react"),PropTypes=require("prop-types"),TextField=function(e){var a=e.label,l=e.isValid,t=e.invalidErrorMessage,r=e.prefix,s=e.suffix,i=e.icon,n=e.style,o=e.className,p=e.forwardedRef,c=_objectWithoutProperties(e,["label","isValid","invalidErrorMessage","prefix","suffix","icon","style","className","forwardedRef"]),d="",f=null;a&&(f=React.createElement("label",{className:"blx-ui-text"},a));var x=null;l||(x=React.createElement("span",{className:"blx-invalid-input-message"},t),d+=" blx-invalid");var u=null;r&&(u=React.createElement("span",{className:"blx-text-field-prefix"},r));var b=null;s&&(b=React.createElement("span",{className:"blx-text-field-suffix"},s));var m=null;i&&(m=React.createElement("span",{className:"blx-text-field-icon"},i));var y=null;c.maxLength&&(y=React.createElement("span",{className:"blx-text-field-helper-text"},c.value.length+"/"+c.maxLength));var v="blx-text-field ";return c.disabled&&(v+="blx-disabled "),React.createElement("div",{style:n,className:v+" "+o},f,React.createElement("div",{className:"blx-text-field-container"},u,b,React.createElement("input",_extends({className:d,ref:p},c)),m),x,y)};TextField.propTypes={className:PropTypes.string,style:PropTypes.object,label:PropTypes.string,prefix:PropTypes.oneOfType([PropTypes.string,PropTypes.node]),suffix:PropTypes.oneOfType([PropTypes.string,PropTypes.node]),icon:PropTypes.node,disabled:PropTypes.bool,isValid:PropTypes.bool,invalidErrorMessage:PropTypes.string},TextField.defaultProps={className:"",style:null,label:"",prefix:null,suffix:null,icon:null,disabled:!1,isValid:!0,invalidErrorMessage:""},module.exports=React.forwardRef(function(e,a){return React.createElement(TextField,_extends({},e,{forwardedRef:a}))});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0L1RleHRGaWVsZC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiUHJvcFR5cGVzIiwiVGV4dEZpZWxkIiwiX3JlZiIsImxhYmVsIiwiaXNWYWxpZCIsImludmFsaWRFcnJvck1lc3NhZ2UiLCJwcmVmaXgiLCJzdWZmaXgiLCJpY29uIiwic3R5bGUiLCJjbGFzc05hbWUiLCJmb3J3YXJkZWRSZWYiLCJvdGhlciIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsInRleHRGaWVsZENsYXNzZXMiLCJsYWJlbEVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW52YWxpZExhYmVsTWVzc2FnZSIsInByZWZpeEVsZW1lbnQiLCJzdWZmaXhFbGVtZW50IiwiaWNvbkVsZW1lbnQiLCJoZWxwZXJUZXh0RWxlbWVudCIsIm1heExlbmd0aCIsInZhbHVlIiwibGVuZ3RoIiwiY2xhc3NlcyIsImRpc2FibGVkIiwiX2V4dGVuZHMiLCJyZWYiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvYmplY3QiLCJvbmVPZlR5cGUiLCJub2RlIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJmb3J3YXJkUmVmIiwicHJvcHMiXSwibWFwcGluZ3MiOiI0VUFBQSxJQUFNQSxNQUFRQyxRQUFRLFNBQ2hCQyxVQUFZRCxRQUFRLGNBR3BCRSxVQUFZLFNBQUFDLEdBQTZHLElBQTFHQyxFQUEwR0QsRUFBMUdDLE1BQU9DLEVBQW1HRixFQUFuR0UsUUFBU0MsRUFBMEZILEVBQTFGRyxvQkFBcUJDLEVBQXFFSixFQUFyRUksT0FBUUMsRUFBNkRMLEVBQTdESyxPQUFRQyxFQUFxRE4sRUFBckRNLEtBQU1DLEVBQStDUCxFQUEvQ08sTUFBT0MsRUFBd0NSLEVBQXhDUSxVQUFXQyxFQUE2QlQsRUFBN0JTLGFBQWlCQyxFQUFZQyx5QkFBQVgsRUFBQSxDQUFBLFFBQUEsVUFBQSxzQkFBQSxTQUFBLFNBQUEsT0FBQSxRQUFBLFlBQUEsaUJBRXpIWSxFQUFtQixHQUduQkMsRUFBZSxLQUNmWixJQUNGWSxFQUFlakIsTUFBQWtCLGNBQUEsUUFBQSxDQUFPTixVQUFVLGVBQWVQLElBSWpELElBQUljLEVBQXNCLEtBQ3JCYixJQUNIYSxFQUFzQm5CLE1BQUFrQixjQUFBLE9BQUEsQ0FBTU4sVUFBVSw2QkFBNkJMLEdBQ25FUyxHQUFvQixnQkFJdEIsSUFBSUksRUFBZ0IsS0FDaEJaLElBQ0ZZLEVBQWdCcEIsTUFBQWtCLGNBQUEsT0FBQSxDQUFNTixVQUFVLHlCQUF5QkosSUFJM0QsSUFBSWEsRUFBZ0IsS0FDaEJaLElBQ0ZZLEVBQWdCckIsTUFBQWtCLGNBQUEsT0FBQSxDQUFNTixVQUFVLHlCQUF5QkgsSUFJM0QsSUFBSWEsRUFBYyxLQUNkWixJQUNGWSxFQUFjdEIsTUFBQWtCLGNBQUEsT0FBQSxDQUFNTixVQUFVLHVCQUF1QkYsSUFJdkQsSUFBSWEsRUFBb0IsS0FDcEJULEVBQU1VLFlBQ1JELEVBQW9CdkIsTUFBQWtCLGNBQUEsT0FBQSxDQUFNTixVQUFVLDhCQUFpQ0UsRUFBTVcsTUFBTUMsT0FBN0QsSUFBdUVaLEVBQU1VLFlBSW5HLElBQUlHLEVBQVUsa0JBR2QsT0FGSWIsRUFBTWMsV0FBVUQsR0FBVyxpQkFHN0IzQixNQUFBa0IsY0FBQSxNQUFBLENBQ0VQLE1BQU9BLEVBQ1BDLFVBQWNlLEVBQWQsSUFBeUJmLEdBRXhCSyxFQUNEakIsTUFBQWtCLGNBQUEsTUFBQSxDQUFLTixVQUFVLDRCQUNaUSxFQUNBQyxFQUNEckIsTUFBQWtCLGNBQUEsUUFBQVcsU0FBQSxDQUNFakIsVUFBV0ksRUFDWGMsSUFBS2pCLEdBQ0RDLElBRUxRLEdBRUZILEVBQ0FJLElBS1BwQixVQUFVNEIsVUFBWSxDQUNwQm5CLFVBQVdWLFVBQVU4QixPQUNyQnJCLE1BQU9ULFVBQVUrQixPQUNqQjVCLE1BQU9ILFVBQVU4QixPQUNqQnhCLE9BQVFOLFVBQVVnQyxVQUFVLENBQzFCaEMsVUFBVThCLE9BQ1Y5QixVQUFVaUMsT0FFWjFCLE9BQVFQLFVBQVVnQyxVQUFVLENBQzFCaEMsVUFBVThCLE9BQ1Y5QixVQUFVaUMsT0FFWnpCLEtBQU1SLFVBQVVpQyxLQUNoQlAsU0FBVTFCLFVBQVVrQyxLQUNwQjlCLFFBQVNKLFVBQVVrQyxLQUNuQjdCLG9CQUFxQkwsVUFBVThCLFFBR2pDN0IsVUFBVWtDLGFBQWUsQ0FDdkJ6QixVQUFXLEdBQ1hELE1BQU8sS0FDUE4sTUFBTyxHQUNQRyxPQUFRLEtBQ1JDLE9BQVEsS0FDUkMsS0FBTSxLQUNOa0IsVUFBVSxFQUNWdEIsU0FBUyxFQUNUQyxvQkFBcUIsSUFHdkIrQixPQUFPQyxRQUFVdkMsTUFBTXdDLFdBQVcsU0FBQ0MsRUFBT1gsR0FBUixPQUNoQzlCLE1BQUFrQixjQUFDZixVQUFEMEIsU0FBQSxHQUFlWSxFQUFmLENBQXNCNUIsYUFBY2lCIiwiZmlsZSI6ImlucHV0L1RleHRGaWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxuXG5jb25zdCBUZXh0RmllbGQgPSAoeyBsYWJlbCwgaXNWYWxpZCwgaW52YWxpZEVycm9yTWVzc2FnZSwgcHJlZml4LCBzdWZmaXgsIGljb24sIHN0eWxlLCBjbGFzc05hbWUsIGZvcndhcmRlZFJlZiwgLi4ub3RoZXIgfSkgPT4ge1xuICAvLyB0ZXh0IGlucHV0IGVsZW1lbnQgaXRzZWxmXG4gIGxldCB0ZXh0RmllbGRDbGFzc2VzID0gJyc7XG5cbiAgLy8gbGFiZWwgZWxlbWVudFxuICBsZXQgbGFiZWxFbGVtZW50ID0gbnVsbDtcbiAgaWYgKGxhYmVsKSB7XG4gICAgbGFiZWxFbGVtZW50ID0gPGxhYmVsIGNsYXNzTmFtZT1cImJseC11aS10ZXh0XCI+e2xhYmVsfTwvbGFiZWw+O1xuICB9XG5cbiAgLy8gaW52YWxpZCBtZXNzYWdlIGFuZCBjbGFzc1xuICBsZXQgaW52YWxpZExhYmVsTWVzc2FnZSA9IG51bGw7XG4gIGlmICghaXNWYWxpZCkge1xuICAgIGludmFsaWRMYWJlbE1lc3NhZ2UgPSA8c3BhbiBjbGFzc05hbWU9XCJibHgtaW52YWxpZC1pbnB1dC1tZXNzYWdlXCI+e2ludmFsaWRFcnJvck1lc3NhZ2V9PC9zcGFuPjtcbiAgICB0ZXh0RmllbGRDbGFzc2VzICs9ICcgYmx4LWludmFsaWQnO1xuICB9XG5cbiAgLy8gcHJlZml4IGVsZW1lbnRcbiAgbGV0IHByZWZpeEVsZW1lbnQgPSBudWxsO1xuICBpZiAocHJlZml4KSB7XG4gICAgcHJlZml4RWxlbWVudCA9IDxzcGFuIGNsYXNzTmFtZT1cImJseC10ZXh0LWZpZWxkLXByZWZpeFwiPntwcmVmaXh9PC9zcGFuPjtcbiAgfVxuXG4gIC8vIHN1ZmZpeCBlbGVtZW50XG4gIGxldCBzdWZmaXhFbGVtZW50ID0gbnVsbDtcbiAgaWYgKHN1ZmZpeCkge1xuICAgIHN1ZmZpeEVsZW1lbnQgPSA8c3BhbiBjbGFzc05hbWU9XCJibHgtdGV4dC1maWVsZC1zdWZmaXhcIj57c3VmZml4fTwvc3Bhbj47XG4gIH1cblxuICAvLyBpY29uIGVsZW1lbnRcbiAgbGV0IGljb25FbGVtZW50ID0gbnVsbDtcbiAgaWYgKGljb24pIHtcbiAgICBpY29uRWxlbWVudCA9IDxzcGFuIGNsYXNzTmFtZT1cImJseC10ZXh0LWZpZWxkLWljb25cIj57aWNvbn08L3NwYW4+O1xuICB9XG5cbiAgLy8gaGVscGVyIHRleHRcbiAgbGV0IGhlbHBlclRleHRFbGVtZW50ID0gbnVsbDtcbiAgaWYgKG90aGVyLm1heExlbmd0aCkge1xuICAgIGhlbHBlclRleHRFbGVtZW50ID0gPHNwYW4gY2xhc3NOYW1lPVwiYmx4LXRleHQtZmllbGQtaGVscGVyLXRleHRcIj57YCR7b3RoZXIudmFsdWUubGVuZ3RofS8ke290aGVyLm1heExlbmd0aH1gfTwvc3Bhbj47XG4gIH1cblxuICAvLyByb290IGxldmVsIGNsYXNzZXNcbiAgbGV0IGNsYXNzZXMgPSAnYmx4LXRleHQtZmllbGQgJztcbiAgaWYgKG90aGVyLmRpc2FibGVkKSBjbGFzc2VzICs9ICdibHgtZGlzYWJsZWQgJztcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlc30gJHtjbGFzc05hbWV9YH1cbiAgICA+XG4gICAgICB7bGFiZWxFbGVtZW50fVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHgtdGV4dC1maWVsZC1jb250YWluZXJcIj5cbiAgICAgICAge3ByZWZpeEVsZW1lbnR9XG4gICAgICAgIHtzdWZmaXhFbGVtZW50fVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9e3RleHRGaWVsZENsYXNzZXN9XG4gICAgICAgICAgcmVmPXtmb3J3YXJkZWRSZWZ9XG4gICAgICAgICAgey4uLm90aGVyfVxuICAgICAgICAvPlxuICAgICAgICB7aWNvbkVsZW1lbnR9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtpbnZhbGlkTGFiZWxNZXNzYWdlfVxuICAgICAge2hlbHBlclRleHRFbGVtZW50fVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5UZXh0RmllbGQucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJlZml4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlXG4gIF0pLFxuICBzdWZmaXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGVcbiAgXSksXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGlzVmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuICBpbnZhbGlkRXJyb3JNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5UZXh0RmllbGQuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBzdHlsZTogbnVsbCxcbiAgbGFiZWw6ICcnLFxuICBwcmVmaXg6IG51bGwsXG4gIHN1ZmZpeDogbnVsbCxcbiAgaWNvbjogbnVsbCxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBpc1ZhbGlkOiB0cnVlLFxuICBpbnZhbGlkRXJyb3JNZXNzYWdlOiAnJ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiAoXG4gIDxUZXh0RmllbGQgey4uLnByb3BzfSBmb3J3YXJkZWRSZWY9e3JlZn0gLz5cbikpO1xuXG4iXX0=
