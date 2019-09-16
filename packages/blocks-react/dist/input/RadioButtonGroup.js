"use strict";var React=require("react"),PropTypes=require("prop-types"),RadioButton=require("./RadioButton.js"),RadioButtonGroup=function(t){return React.createElement("div",{style:t.style,className:t.className,role:"radiogroup","aria-label":t.label},t.options.map(function(e,o){return React.createElement(RadioButton,{key:e.text,name:t.name,text:e.text,value:e.text,disabled:t.disabled,onChange:t.onChange,checked:o===t.checkedIndex,isValid:!1!==e.isValid||e.isValid})}))};RadioButtonGroup.propTypes={className:PropTypes.string,style:PropTypes.object,name:PropTypes.string.isRequired,onChange:PropTypes.func.isRequired,options:PropTypes.arrayOf(PropTypes.object),disabled:PropTypes.bool,checkedIndex:PropTypes.number,label:PropTypes.string},RadioButtonGroup.defaultProps={className:"",style:null,options:[],disabled:!1,checkedIndex:-1,label:"radio-group"},module.exports=RadioButtonGroup;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0L1JhZGlvQnV0dG9uR3JvdXAuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIlByb3BUeXBlcyIsIlJhZGlvQnV0dG9uIiwiUmFkaW9CdXR0b25Hcm91cCIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiY2xhc3NOYW1lIiwicm9sZSIsImFyaWEtbGFiZWwiLCJsYWJlbCIsIm9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJpZHgiLCJrZXkiLCJ0ZXh0IiwibmFtZSIsInZhbHVlIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJjaGVja2VkSW5kZXgiLCJpc1ZhbGlkIiwicHJvcFR5cGVzIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJhcnJheU9mIiwiYm9vbCIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJhQUFBLElBQU1BLE1BQVFDLFFBQVEsU0FDaEJDLFVBQVlELFFBQVEsY0FFcEJFLFlBQWNGLFFBQVEsb0JBR3RCRyxpQkFBbUIsU0FBQUMsR0FBQSxPQUN2QkwsTUFBQU0sY0FBQSxNQUFBLENBQ0VDLE1BQU9GLEVBQU1FLE1BQ2JDLFVBQVdILEVBQU1HLFVBQ2pCQyxLQUFLLGFBQ0xDLGFBQVlMLEVBQU1NLE9BR2hCTixFQUFNTyxRQUFRQyxJQUFJLFNBQUNDLEVBQVFDLEdBQVQsT0FDaEJmLE1BQUFNLGNBQUNILFlBQUQsQ0FDRWEsSUFBS0YsRUFBT0csS0FDWkMsS0FBTWIsRUFBTWEsS0FDWkQsS0FBTUgsRUFBT0csS0FDYkUsTUFBT0wsRUFBT0csS0FDZEcsU0FBVWYsRUFBTWUsU0FDaEJDLFNBQVVoQixFQUFNZ0IsU0FDaEJDLFFBQVNQLElBQVFWLEVBQU1rQixhQUN2QkMsU0FBNEIsSUFBbkJWLEVBQU9VLFNBQW9CVixFQUFPVSxjQU9yRHBCLGlCQUFpQnFCLFVBQVksQ0FDM0JqQixVQUFXTixVQUFVd0IsT0FDckJuQixNQUFPTCxVQUFVeUIsT0FDakJULEtBQU1oQixVQUFVd0IsT0FBT0UsV0FDdkJQLFNBQVVuQixVQUFVMkIsS0FBS0QsV0FDekJoQixRQUFTVixVQUFVNEIsUUFBUTVCLFVBQVV5QixRQUNyQ1AsU0FBVWxCLFVBQVU2QixLQUNwQlIsYUFBY3JCLFVBQVU4QixPQUN4QnJCLE1BQU9ULFVBQVV3QixRQUduQnRCLGlCQUFpQjZCLGFBQWUsQ0FDOUJ6QixVQUFXLEdBQ1hELE1BQU8sS0FDUEssUUFBUyxHQUNUUSxVQUFVLEVBQ1ZHLGNBQWUsRUFDZlosTUFBTyxlQUdUdUIsT0FBT0MsUUFBVS9CIiwiZmlsZSI6ImlucHV0L1JhZGlvQnV0dG9uR3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbmNvbnN0IFJhZGlvQnV0dG9uID0gcmVxdWlyZSgnLi9SYWRpb0J1dHRvbi5qc3gnKTtcblxuXG5jb25zdCBSYWRpb0J1dHRvbkdyb3VwID0gcHJvcHMgPT4gKFxuICA8ZGl2XG4gICAgc3R5bGU9e3Byb3BzLnN0eWxlfVxuICAgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfVxuICAgIHJvbGU9XCJyYWRpb2dyb3VwXCJcbiAgICBhcmlhLWxhYmVsPXtwcm9wcy5sYWJlbH1cbiAgPlxuICAgIHtcbiAgICAgIHByb3BzLm9wdGlvbnMubWFwKChvcHRpb24sIGlkeCkgPT4gKFxuICAgICAgICA8UmFkaW9CdXR0b25cbiAgICAgICAgICBrZXk9e29wdGlvbi50ZXh0fVxuICAgICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XG4gICAgICAgICAgdGV4dD17b3B0aW9uLnRleHR9XG4gICAgICAgICAgdmFsdWU9e29wdGlvbi50ZXh0fVxuICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgY2hlY2tlZD17aWR4ID09PSBwcm9wcy5jaGVja2VkSW5kZXh9XG4gICAgICAgICAgaXNWYWxpZD17b3B0aW9uLmlzVmFsaWQgPT09IGZhbHNlID8gb3B0aW9uLmlzVmFsaWQgOiB0cnVlfVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgICB9XG4gIDwvZGl2PlxuKTtcblxuUmFkaW9CdXR0b25Hcm91cC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNoZWNrZWRJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblJhZGlvQnV0dG9uR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBzdHlsZTogbnVsbCxcbiAgb3B0aW9uczogW10sXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgY2hlY2tlZEluZGV4OiAtMSxcbiAgbGFiZWw6ICdyYWRpby1ncm91cCdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmFkaW9CdXR0b25Hcm91cDtcblxuIl19
