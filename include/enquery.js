document.write(`
<div class="col-md-3">
<h1 class="vision-rightside-h1">Enquiry Form</h1>
<div class="QuickBoxInquiry">
  <form method="POST" name="contactform1" onSubmit="return(validate());"
    action="https://www.globaladvertisingmedia.com/contact-form/contact-form-handler1.php">
    <script src="contact-form/gen_validatorv31.js"></script>
    <table width="100%" border="0" cellspacing="0" class="contact-table-style">
      <tr>
        <td><input type="text" name="name" placeholder="Full Name" class="InputText">
        </td>
      </tr>
      
      <tr>
        <td><input type="number" name="contact" placeholder="Phone Number" class="InputText">
        </td>
      </tr>
      <tr>
        <td><input type="text" name="email" placeholder="Email Address" class="InputText">
        </td>
      </tr>
      
      <tr>
        <td><select name="services" class="InputText">
            <option>Select Services</option>
            <option>Google Ads</option>
            <option>Facebook Ads</option>
            <option>Linkedin Ads</option>
            <option>Twitter Ads</option>
          </select>
        </td>
      </tr>
      
      <tr>
        <td><textarea name="message" placeholder="Your Message" class="InputMessage"></textarea>
        </td>
      </tr>
      <tr>
        <td>
          <center>
            <input type="submit" name="submit" value="Submit"
              style="width:100px; padding:7px; background-color:#FF0000; border:0px; color:#FFFFFF;" />
          </center>
        </td>
      </tr>
    </table>
  </form>
</div>
<Br>
<div>
  <h1 class="vision-rightside-h1">Be Associate</h1>
  <img src="images/partner-ads.gif" alt="" class="rightsidebar-partners">
</div>
</div>
`);