<?php
use PHPUnit\Framework\TestCase;

require_once 'src/Poneys.php';

/**
 * Classe de test de gestion de poneys
 */
class PoneysTest extends TestCase
{
    protected function setUp(): void
    {
        // Setup
        $this->Poneys = new Poneys();
        $this->Poneys->setCount(defaultponeys);
        $this->Poneys->setMax(maxponeys);
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public function testRemovePoneyFromField()
    {
        // Action
        $this->Poneys->removePoneyFromField(3);

        // Assert
        $this->assertEquals(5, $this->Poneys->getCount());
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public function testRemoveTooMuchPoneys()
    {
        $this->expectException("Exception");
        $this->expectExceptionCode(403);
        $this->expectExceptionMessage("Cannot remove too much poneys");

        $this->Poneys->removePoneyFromField(20);
    }


    /**
     * Undocumented function
     *
     * @return void
     */
    public function testAddPoneyToField()
    {
        $this->Poneys->addPoneyToField(1);

        $this->assertEquals(9,$this->Poneys->getCount());
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public function testRemovePoneyFromFieldWithDataProvider()
    {
       // Action
        $this->Poneys->removePoneyFromField(3);

        // Assert
        $this->assertEquals(5, $this->Poneys->getCount());
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public function testGetnames()
    {
        $names = [
            'Joe','William','Jack','Averell'
        ];

        $this->poneys = $this->getMockBuilder('Poneys')->getMock();
        $this->poneys
            ->expects($this->exactly(1))
            ->method('getNames')
            ->willReturn($names);
        
        $this->assertEquals($names, $this->poneys->getNames());
    }
    /**
     * Undocumented function
     *
     * @return void
     */
    public function testPlacesRestantes()
    {
        $this->assertEquals(true,$this->Poneys->checkPlacesLibres());
        //Après
        $this->Poneys->setCount(15);

        $this->assertEquals(false,$this->Poneys->checkPlacesLibres());
    }

    public function tearDown(): void
    {
        unset($this->poneys);
    }
}
?>
