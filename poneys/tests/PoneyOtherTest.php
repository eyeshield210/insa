<?php
use PHPUnit\Framework\TestCase;

require_once 'src/Poneys.php';

/**
 * Classe de test de gestion de poneys
 */
class PoneysOtherTest extends TestCase
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
    public function testAddPoneyToField()
    {
        $this->Poneys->addPoneyToField(2);

        $this->assertEquals(10,$this->Poneys->getCount());
    }

    public function tearDown(): void
    {
        unset($this->poneys);
    }
}
?>