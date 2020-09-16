# K2 ShareDo Theme

## To Apply:
1. Ensure Node JS is installed and VS Code
2. Open the folder with VS Code
3. Open the command line in VS Code and run `npm start`
4. Open **./Temp/Merged.html**
5. Copy the contents of the file
6. Create View on SF Designer (For Ref purposes call it **ShareDo Theme**)
7. Add a DataLabel
8. :heavy_plus_sign: Add a server event rule `When the server loads the View`
9. Set the Control Properties of DataLabel using `Set a control's properties` and pressing `(configure)` :gear: 
10. Paste the copied contents (copied from point 5) into the text value in the rule
11. **Check** the `Literal` property so that it applies **yes** (or true)
12. Save and check in the View.
      - At this point you are finished with this view and the "theme" can be added to all your SmartForms Forms for use.
      - **Repeat step 13 to end for each SF Form you want to apply the "theme" to.**
13. Include the view in a SmartForm Form to use.
      - You can add the views you want styled with the theme here or chose a Form that already has Views on it you want styled.  
      - **Note: This theme is designed to override the *Lithium Theme* on the Form and so not setting the theme to `Lithium` on the form may have undesired or expected results.**
14. :heavy_plus_sign: Add Event/Form rule `When the server loads the Form`, action of `then execute the When the server loads` **ShareDo Theme** `View server rule`
15. Save the changes and the form.
  
Use or test the Form with 

## Additional Styling
### Labels
  - Append `ShareDoRegular` to each label you want displayed normally instead of the normal ShareDo Bold label.  
    `My label ShareDoRegular` or `My labelShareDoRegular` or  `label_ShareDoRegular` will all work.
