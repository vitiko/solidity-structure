pragma solidity ^0.4.4;


/**
* Contract has functions with annotations
*/
contract HasFunction {


    /**
    * Get information about something
    * @param someAddress address of something
    * @return uri {HttpUri} Uri of something
    * @return description Some description
    * @return createdAt {DateTime} create date time of something
    */
    function getSomeInfo(address someAddress)
    constant returns (string uri, string description, uint createdAt) {


        /* code here */
        string memory myUri = "http://www.ww";
        string memory myDescription = "... ...";
        uint timestamp = now;

        return (myUri, myDescription, timestamp);
    }

    // Annotation using ///

    /// @dev Function test is something is ok
    /// @param someStaff Some argument description
    /// @return isOk Is something is ok
    function isSomethingOk(bytes someStaff) constant returns (bool isO) {
        return true;
    }


    function noAnnotationInThisFunction (bytes argA, string argB ) constant returns (address returnA, uint returnB) {
        return (this, 333);
    }
}